import Head from 'next/head';

export default function CV() {
  return (
    <div className="max-w-full">
      <Head>
        <title>CV-EN Devef</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="ODGjRxoZ71Gf0hj-0QnW0_gMSiqD_JR8tjPsT37GIWk"
        />
      </Head>

      <main className="flex">
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <iframe
            src={`Career-EN.pdf`}
            title="Career Sergio Morales"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
          />
        </div>
      </main>
    </div>
  );
}
