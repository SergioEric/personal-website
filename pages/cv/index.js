import Head from 'next/head';
// import { useState } from 'react';

export default function CV() {

  // const [viewControls, setState] = useState(false);

  // const textViewControls = viewControls ? "Hide" : "Show";

  // const showPdfControls = viewControls ? "toolbar=0&navpanes=0&scrollbar=0" : "";
  //#toolbar=0&navpanes=0&scrollbar=0
  return (
    <div className="container">
      <Head>
        <title>CV-Devef</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="ODGjRxoZ71Gf0hj-0QnW0_gMSiqD_JR8tjPsT37GIWk" />
      </Head>

      <main className="flex">        
        {/* <button onClick={()=>setState(!viewControls)}>{textViewControls} Controls</button>
        <h1>{viewControls.toString()}</h1> */}
        <section className="flex">
          <embed src={`cv_@sergioemr.pdf`} 
            type="application/pdf" height="2000px" width="100%" />
        </section>


      </main>

      <style jsx>{`
      .title{
        text-align: center;
      }

      .flex{
        // display: flex;
        // justify-content: center;
        // flex-direction: column;
        // align-items:center;
        // height: 100vh;
      }

      main{
        // background-color:#131313;
      }

      `}</style>

      <style jsx>{`
        // html,
        // body {
        //   padding: 0;
        //   margin: 0;
        //   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        //     Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        //     sans-serif;
        //   background-color:#131313;
        // }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
