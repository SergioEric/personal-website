import NavBar from '@components/navbar/navbar';
import AboutMe_CV from '@data/cv';
import Head from 'next/head';

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div>
        <NavBar />
        <main>
          {AboutMe_CV.map((me, index) => (
            <section style={{ lineHeight: '150%' }} key={index}>
              <h1>{me.topic}</h1>
              <ul>
                {me.items.map((item, items_key) => (
                  <li key={items_key}>
                    {item.content}
                    <ul>
                      {item.sub_items.map((sub_item, sub_item_index) => (
                        <li key={sub_item_index * -1}>{sub_item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>

      <style jsx>{`
        main {
          padding: 30px 20px;
          max-width: 840px;
          margin: 0 auto;
        }

        main h1 {
          color: #54a4b6;
          font-size: 1.125rem;
        }
      `}</style>
    </>
  );
};

export default AboutMePage;