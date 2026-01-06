import Footer from '@components/footer/footer';
import NavBar from '@components/navbar/navbar';
import AboutMe_CV from '@data/cv';
import Head from 'next/head';

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 flex flex-col">
        <NavBar />
        <main className='max-w-210 mx-auto my-20 pt-7.5 px-5 min-h-[calc(100svh-243px)] text-slate-600 dark:text-slate-400 text-sm'>
          {AboutMe_CV.map((me, index) => (
            <section className='mb-2' style={{ lineHeight: '150%' }} key={index}>
              <h1 className='text-[#54a4b6] text-lg font-bold mb-2'>{me.topic}</h1>
              <ul className='list-disc pl-5 space-y-2'>
                {me.items.map((item, items_key) => (
                  <li key={items_key}>
                    {item.content}
                    {item.sub_items.length > 0 && (
                      <ul className='list-disc pl-5 mt-2 space-y-1'>
                        {item.sub_items.map((sub_item, sub_item_index) => (
                          <li key={sub_item_index * -1}>{sub_item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
        <Footer />
      </div>

      <style jsx>{`

      `}</style>
    </>
  );
};

export default AboutMePage;