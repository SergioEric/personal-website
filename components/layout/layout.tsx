import React from 'react';
import NavBar from '@components/navbar/navbar';
import Footer from '@components/footer/footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <NavBar />
      <main className="grow flex flex-col items-center w-full mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
