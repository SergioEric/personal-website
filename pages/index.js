// import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';

export default function Home() {

  const [isActive, setstate] = useState(false);

  return (
    <div className="all_content">
      {/* <Head>
        <title>Devef</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="ODGjRxoZ71Gf0hj-0QnW0_gMSiqD_JR8tjPsT37GIWk" />
      </Head> */}
      {/* <section className="section">
        <div className="container">
          <h1 className="title">
            ¡Welcome to Devef!
            </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
            </p>
          <div className="tabs">
            <ul>
              <li className="is-active"><a>Pictures</a></li>
              <li><a>Music</a></li>
              <li><a>Videos</a></li>
              <li><a>Documents</a></li>
            </ul>
          </div>

          <div className="columns">
            <div className="box column">
              I'm in a box.
              <br/>
              <button className="button is-primary" onClick={()=> setstate(!isActive)}>
                showModal
              </button>
            </div>
            <div className="box column">
              I'm in a box.
            </div>
          </div>
          <div className={`modal ${isActive ? " is-active": ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
            <p className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
    </p>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={()=> setstate(!isActive)}></button>
          </div>
        </div>
      </section> */}
      <main className="flex">
        {/* <h1 className="title">
          ¡Welcome to Devef!
        </h1> */}


        <figure>
          <Image src="https://image.freepik.com/vector-gratis/construccion-herramientas_24877-63505.jpg"
            width={400}
            height={400}
          >
          </Image>
        </figure>
        <section className="flex logo_section">
          <figure>
            <Image src="/devef_black.webp"
              width={80}
              height={80}
            >
            </Image>
            {/* <img src="devef_black.webp" alt="logo" width="80"/> */}
          </figure>
          <p>Devef</p>
        </section>


      </main>

      <style jsx>{`
      .title{
        text-align: center;
      }

      .flex{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
      }

      .logo_section{
        flex-direction: row;
      }

      .logo_section figure {
        margin-right: 1em;
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color:#F6F6F6;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
