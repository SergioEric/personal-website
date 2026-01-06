import Footer from '@components/footer/footer';
import NavBar from '@components/navbar/navbar';
import Head from 'next/head';

const ContactMePage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <div className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300 flex flex-col">
        <NavBar />
        <main className='mt-20 pt-7.5 px-5 min-h-[calc(100svh-243px)] max-w-240 w-full mx-auto text-slate-600 dark:text-slate-400'>
          <div className="grid items-center gap-2 grid-cols-[max-content_1fr] mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.2678 8.5611L13.0024 11.9954C12.1952 12.6282 11.0636 12.6282 10.2564 11.9954L5.95435 8.5611"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>sericmorales@gmail.com</span>
          </div>

          <div className="grid items-center gap-2 grid-cols-[max-content_1fr] mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M14.353 6.04303C16.124 6.38703 17.508 7.77203 17.853 9.54303"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04254 8.48441 11.0315 12.4724Z"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>+57 3046797488</span>
          </div>
          <div className="grid items-center gap-2 grid-cols-[max-content_1fr] mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.23901 10.3913C4.25342 6.15071 7.70278 2.72471 11.9434 2.73912C16.1839 2.75353 19.6099 6.20288 19.5955 10.4435V10.5304C19.5434 13.2869 18.0042 15.8348 16.1173 17.8261C15.0381 18.9467 13.833 19.9388 12.526 20.7826C12.1765 21.0849 11.6581 21.0849 11.3086 20.7826C9.36008 19.5143 7.64995 17.9131 6.2564 16.0522C5.01436 14.4294 4.30918 12.4597 4.23901 10.4174L4.23901 10.3913Z"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                opacity="0.4"
                cx="11.9172"
                cy="10.5391"
                r="2.46087"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Barranquilla, Colombia</span>
          </div>
          <div className="grid items-center gap-2 grid-cols-[max-content_1fr] mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M3.09253 9.40421H20.9165"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.80786 13.3098C6.80786 12.8956 7.14365 12.5598 7.55786 12.5598H7.56713C7.98134 12.5598 8.31713 12.8956 8.31713 13.3098C8.31713 13.724 7.98134 14.0598 7.56713 14.0598H7.55786C7.14365 14.0598 6.80786 13.724 6.80786 13.3098ZM12.0046 12.5598C11.5904 12.5598 11.2546 12.8956 11.2546 13.3098C11.2546 13.724 11.5904 14.0598 12.0046 14.0598H12.0138C12.4281 14.0598 12.7638 13.724 12.7638 13.3098C12.7638 12.8956 12.4281 12.5598 12.0138 12.5598H12.0046ZM16.442 12.5598C16.0278 12.5598 15.692 12.8956 15.692 13.3098C15.692 13.724 16.0278 14.0598 16.442 14.0598H16.4513C16.8655 14.0598 17.2013 13.724 17.2013 13.3098C17.2013 12.8956 16.8655 12.5598 16.4513 12.5598H16.442ZM16.442 16.4463C16.0278 16.4463 15.692 16.7821 15.692 17.1963C15.692 17.6105 16.0278 17.9463 16.442 17.9463H16.4513C16.8655 17.9463 17.2013 17.6105 17.2013 17.1963C17.2013 16.7821 16.8655 16.4463 16.4513 16.4463H16.442ZM11.2546 17.1963C11.2546 16.7821 11.5904 16.4463 12.0046 16.4463H12.0138C12.4281 16.4463 12.7638 16.7821 12.7638 17.1963C12.7638 17.6105 12.4281 17.9463 12.0138 17.9463H12.0046C11.5904 17.9463 11.2546 17.6105 11.2546 17.1963ZM7.55786 16.4463C7.14365 16.4463 6.80786 16.7821 6.80786 17.1963C6.80786 17.6105 7.14365 17.9463 7.55786 17.9463H7.56713C7.98134 17.9463 8.31713 17.6105 8.31713 17.1963C8.31713 16.7821 7.98134 16.4463 7.56713 16.4463H7.55786Z"
                fill="var(--foreground)"
              />
              <path
                d="M16.0438 2V5.29078"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.9654 2V5.29078"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>{years()} years old</span>
          </div>
        </main>
        <Footer />
      </div>

      <style jsx>{`


        .item {
          gap: 0.5rem;
          display: grid;
          align-items: center;
          margin-bottom: 1rem;
          grid-template-columns: max-content 1fr;
        }
      `}</style>
    </>
  );
};

const years = () => {
  const bornAt = new Date(1996, 10, 9);
  const now = new Date();

  const yearsDifference = now.getFullYear() - bornAt.getFullYear();
  const monthsDifference = now.getMonth() - bornAt.getMonth();
  const daysDifference = now.getDate() - bornAt.getDate();
  if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
    return yearsDifference - 1;
  }
  return yearsDifference;
}

export default ContactMePage;
