// import Head from 'next/head';
import NavBar from '@components/navbar/navbar';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
  const [isActive, setstate] = useState(false);

  return (
    <div className="all_content">
      <NavBar />
      <main className="flex">
        {/* <div className="radial"></div> */}
        <p className="test">
          I'm Sergio Eric. Software Engineer by career, ui designer by passion focus on create
          valuable products.
        </p>
        {/* <figure>
          <Image
            src="https://image.freepik.com/vector-gratis/construccion-herramientas_24877-63505.jpg"
            width={400}
            height={400}
          ></Image>
        </figure>
        <section className="flex logo_section">
          <figure>
            <Image src="/devef_black.webp" width={80} height={80}></Image>
          </figure>
          <p>Devef</p>
        </section> */}
      </main>

      <style jsx>{`
        .all_content {
          position: relative;
        }

        .radial {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: absolute;
          zindex: -1;
          background: radial-gradient(circle at top left, red, rgba(255, 255, 255, 0) 15%),
            radial-gradient(circle at 80% 20%, blue, rgba(255, 255, 255, 0) 15%);
        }
        .title {
          text-align: center;
        }

        .flex {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .logo_section {
          flex-direction: row;
        }

        .logo_section figure {
          margin-right: 1em;
        }
        .test {
          font-weight: 700;
          font-size: 40px;
          text-align: center;
          line-height: 50px;
          max-width: 1280px;
        }
      `}</style>

      {/* <style jsx>{``}</style> */}
    </div>
  );
}
