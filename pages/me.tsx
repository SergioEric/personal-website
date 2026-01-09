import Footer from '@components/footer/footer';
import NavBar from '@components/navbar/navbar';
import AboutMe_CV_EN from '@data/optimize-en';
import AboutMe_CV_ES from '@data/optimize-es';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AboutMePage = () => {
  const router = useRouter();
  const { query } = router;
  const lang = query.lang;
  const AboutMe_CV = lang === 'es' ? AboutMe_CV_ES : AboutMe_CV_EN;

  const renderFormattedText = (text: string) => {
    // Regex to match URLs starting with http or https, excluding trailing punctuation
    const urlRegex = /(https?:\/\/[^\s\)\],]+)/g;
    // Regex to match date patterns at the start of the string (e.g., "May 2021", "2018 - 2020")
    // It looks for 4 digits (year) and matches until the first colon or end of line.
    const dateRegex = /^([^:]+\d{4}[^:]*(?::|$))/;
    const dateMatch = text.match(dateRegex);

    let prefix = '';
    let body = text;

    if (dateMatch) {
      prefix = dateMatch[0];
      body = text.substring(dateMatch[0].length);
    }

    const parts = body.split(urlRegex);

    return (
      <>
        {prefix && <strong>{prefix}</strong>}
        {parts.map((part, i) =>
          part.match(urlRegex) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#54a4b6] hover:underline transition-all"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Career</title>
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
                    {renderFormattedText(item.content)}
                    {item.sub_items.length > 0 && (
                      <ul className='list-disc pl-5 mt-2 space-y-1'>
                        {item.sub_items.map((sub_item, sub_item_index) => (
                          <li key={sub_item_index * -1}>{renderFormattedText(sub_item)}</li>
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
        @media print {
          :global(nav),
          :global(footer) {
            display: none !important;
          }
           :global(body) {
             background-color: white !important;
           }
            :global(main) {
              margin: 0 !important;
              padding: 0 !important;
              max-width: 100% !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
        }
      `}</style>
    </>
  );
};

export default AboutMePage;