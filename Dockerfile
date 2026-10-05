# Shared build for the portfolio's Next.js apps. NODE picks a runtime the app's Next version supports.
ARG NODE=16
FROM node:${NODE}-alpine AS build
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package*.json yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; else yarn install --frozen-lockfile; fi
COPY . .
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET=production
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET NEXT_TELEMETRY_DISABLED=1
RUN npx next build

FROM node:${NODE}-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app ./
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
