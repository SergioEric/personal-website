import Head from 'next/head';
// import { useState } from 'react';

export default function CV() {
  // const [viewControls, setState] = useState(false);

  // const textViewControls = viewControls ? "Hide" : "Show";

  // const showPdfControls = viewControls ? "toolbar=0&navpanes=0&scrollbar=0" : "";
  //#toolbar=0&navpanes=0&scrollbar=0
  return (
    <div className="max-w-full">
      <Head>
        <title>CV-ES Devef</title>
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
            src={`Career-ES.pdf`}
            title="Carrera - Sergio Morales"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
          />
        </div>
        {/* <section className="flex">
          <embed src={`cv_@sergioemr.pdf`} type="application/pdf" height="2000px" width="100%" />
        </section> */}
      </main>

      <style jsx>{``}</style>
    </div>
  );
}
