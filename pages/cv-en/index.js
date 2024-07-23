import Head from 'next/head';

export default function CV() {
  return (
    <div className="container">
      <Head>
        <title>CV-EN Devef</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="ODGjRxoZ71Gf0hj-0QnW0_gMSiqD_JR8tjPsT37GIWk"
        />
      </Head>

      <main className="flex">
        TODO
        {/* <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <iframe
            src={`CV-ES.pdf`}
            title="CV-EN Sergio Morales"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
          />
        </div> */}
      </main>
    </div>
  );
}
