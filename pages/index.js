import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram</title>
      </Head>

      <main className="flex">
        <h1>Instagram 2.0 </h1>
      </main>
    </div>
  );
}
