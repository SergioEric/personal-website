import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { cn } from '@lib/utils';
import { useSpring, animated, config } from '@react-spring/web';

const NavBar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const AnimatedDiv = animated.div as any;
  const AnimatedNav = animated.nav as any;

  const springProps = useSpring({
    height: isMenuOpen ? '400px' : '66px',
    borderRadius: isMenuOpen ? '2.5rem' : '3rem',
    paddingTop: isMenuOpen ? '24px' : '12px',
    paddingBottom: isMenuOpen ? '24px' : '12px',
    config: config.gentle,
  });

  const menuSpring = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0px)' : 'translateY(-20px)',
    config: config.gentle,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logo_path = resolvedTheme === 'light' ? '/devef_black.webp' : '/devef_white.webp';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3">
      <AnimatedDiv style={springProps} className={cn(
        "mx-auto max-w-240 bg-white/10 dark:bg-[#292348]/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg flex flex-col overflow-hidden px-6"
      )}>
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
            {/* <a className="text-sm font-medium hover:text-primary transition-colors" href="#work">
              Proyectos
            </a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">
              Habilidades
            </a> */}
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/me">
              Career
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact-me">
              <button className="flex items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-transform hover:scale-105">
                <span className="truncate">Contactar</span>
              </button>
            </Link>
            <button
              className="flex md:hidden text-dark dark:text-white items-center justify-center bg-white/10 dark:bg-white/5 rounded-lg p-2 hover:bg-white/20 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {isMenuOpen && (
            <AnimatedNav style={menuSpring} className="flex flex-col items-center justify-center gap-10 flex-1 mt-10">
              {/* <a
                className="text-2xl font-semibold hover:text-primary transition-colors"
                href="#work"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                className="text-2xl font-semibold hover:text-primary transition-colors"
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Habilidades
              </a> */}
              <Link
                className="text-2xl font-semibold hover:text-primary transition-colors"
                href="/me"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
            </AnimatedNav>
          )}
        </div>
      </AnimatedDiv>
    </nav>
  );
};

export default NavBar;
