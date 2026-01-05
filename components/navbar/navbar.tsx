import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useTheme } from 'next-themes';

const NavBar = () => {
  // const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  // const logo_path = currentTheme === 'light' ? '/devef_black.webp' : '/devef_white.webp';
  const logo_path = '/devef_white.webp';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3">
      <div className="mx-auto max-w-240 bg-white/10 dark:bg-[#292348]/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-lg">
        <header className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center justify-center">
              {mounted && (
                <Image
                  src={logo_path}
                  width={40}
                  height={40}
                  alt="Logo"
                  style={{ objectFit: 'fill' }}
                />
              )}
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#work"
            >
              Proyectos
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#skills"
            >
              Habilidades
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#about"
            >
              Sobre mí
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact-me">
              <button className="flex items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-transform hover:scale-105">
                <span className="truncate">Contactar</span>
              </button>
            </Link>
            <button className="md:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
