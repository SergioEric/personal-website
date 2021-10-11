// import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from '@components/navbar/navbar';
import SoftSkills from '@components/skills/skills';
import Footer from '@components/footer/footer';
import sotfSkill from '@data/soft_skills';

export default function Home() {
  const [isActive, setstate] = useState(false);
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const otherList = [...list, ...list, ...list, ...list];

  return (
    <div className="all_content flex col">
      <NavBar />
      <main className="flex col center">
        <p className="who_ami">
          I'm <span> Sergio Eric</span>. Software Engineer by career, ui designer by passion focus
          on create valuable products.
        </p>
        <section className="soft_skills__container">
          <p className="soft_skills__title">SoftSkills</p>
          <RawSoftSkills />
        </section>
      </main>

      <div style={{ flexGrow: 1, width: '100%', height: '100' }}></div>
      <Footer />

      <style jsx>{`
        * {
          //outline: 1px solid;
        }
        .all_content {
          position: relative;
          //border: 1px solid red;
          height: 100vh;
        }

        .title {
          text-align: center;
        }

        .who_ami {
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 3.125rem;
          text-align: center;
          max-width: 1280px;
          margin-top: 2em;
        }

        .who_ami span {
          color: rgba(63, 168, 209, 1);
        }

        .soft_skills__title {
          font-weight: bold;
          font-size: 30px;
          line-height: 39px;

          text-align: center;

          color: #54a4b6;
          margin-bottom: 1em;
        }

        .soft_skills__container {
          margin-top: 4em;
        }

        @media (max-width: 576px) {
          .who_ami {
            font-size: 1.7em;
            line-height: 2.5rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

const calc_years = (since: number) => {
  const thisYear = new Date().getFullYear();
  const _since = thisYear - since;
  return _since === 1 ? `${_since} year` : `${_since} years`;
};

const RawSoftSkills = () => (
  <div className="container flex center">
    {sotfSkill.map((skill) => (
      <div className="specific_skill flex col center" key={skill.name}>
        <SoftSkills skillName={skill.name} time={`${calc_years(skill.since)}`} />
        <div style={{ height: '1em' }}></div>
        {skill.abilities.map((ability, index) => (
          <div className="flex center" style={{ gap: '10px' }} key={index}>
            <div className="dot"></div>
            <p>{ability}</p>
          </div>
        ))}
      </div>
    ))}

    <style jsx>{`
      * {
        //outline: 1px solid;
      }
      .container {
        gap: 20px;
        flex-wrap: wrap;
      }

      .specific_skill {
      }
      ul {
        margin: 0.4em 0;
      }
      .dot {
        border-radius: 2px;
        height: 4px;
        width: 4px;
        background-color: var(--foreground);
      }
    `}</style>
  </div>
);
