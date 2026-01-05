import NavBar from '@components/navbar/navbar';
import AboutMe_CV from '@data/cv';
import Head from 'next/head';

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <NavBar />
        <main className='max-w-210 mx-auto mt-20 pt-7.5 px-5 min-h-[calc(100svh-243px)]'>
          {AboutMe_CV.map((me, index) => (
            <section className='mt-1' style={{ lineHeight: '150%' }} key={index}>
              <h1 className='text-[#54a4b6] text-xl'>{me.topic}</h1>
              <ul className='ml-2'>
                {me.items.map((item, items_key) => (
                  <li className='list-circle' key={items_key}>
                    <span className='ml-3'>{item.content}</span> - "#####"
                    <ul className='ml-10'>
                      {item.sub_items.map((sub_item, sub_item_index) => (
                        <li key={sub_item_index * -1} className='list-disc'>{sub_item}</li>
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

      `}</style>
    </>
  );
};

export default AboutMePage;