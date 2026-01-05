
const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-card-dark border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
      <div className="layout-container px-4 md:px-10 max-w-240 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary">
              terminal
            </span>
            <h2 className="text-xl font-bold">Sergio Eric</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Sergio Eric. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#292348] hover:bg-primary hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
          </a>
          <a
            className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#292348] hover:bg-primary hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">link</span>
          </a>
          <a
            className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#292348] hover:bg-primary hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">
              alternate_email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
