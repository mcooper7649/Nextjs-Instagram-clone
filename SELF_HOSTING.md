# Self-hosting

Live at **https://instaclone.mycodedojo.com**, self-hosted on Michael's homelab (moved off Netlify/Vercel in October 2026).

It runs as a container in the `portfolio-projects` Docker Compose stack on the homelab (`~/portfolio-projects`, visible in Portainer), behind Caddy.

**Redeploy after pushing to `main`:**

```bash
ssh mcooper@192.168.68.75 '~/portfolio-projects/deploy.sh instaclone'
```

**Run locally:**

```bash
docker build -t instaclone .
docker run -p 3000:3000 instaclone
```

## Configuration

- **Backend:** Firebase project `instagram-clone-42c5a` (Firestore + Storage), config in `firebase.js`.
- **Login:** a "Try the demo" login (NextAuth Credentials provider, pick a display name) is always on. Google sign-in is enabled only when `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` are set.
- **Env:** `NEXTAUTH_URL`, `NEXTAUTH_SECRET`.
- Logos are local (`public/instagram-*.png`); the old links.papareact.com images are gone.
