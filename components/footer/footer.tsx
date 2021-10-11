const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer_container">
      © Devef {year} - All right reserved
      <style jsx>
        {`
          * {
            //outline: 1px solid var(--foreground);
          }
          .footer_container {
            padding: 1.2em;
            margin-top: 2em;
            text-align: center;
            border-top: 1px solid var(--foreground);
          }
        `}
      </style>
    </footer>
  );
};
export default Footer;
