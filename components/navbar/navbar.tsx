import Image from 'next/image';
import { useTheme } from 'next-themes';

const logo_size = 40;
const NavBar = () => {
  const theme = useTheme();
  const logo_path = theme.systemTheme === 'light' ? '/devef_black.webp' : '/devef_white.webp';
  return (
    <div className="navbar__container flex">
      <div className="logo_wrapper">
        <Image
          src={logo_path}
          layout="fixed"
          width={logo_size}
          height={logo_size}
          objectFit="fill"
        />
      </div>
      {/* <div style={{ flexGrow: 1 }}></div> */}

      <nav>
        <ul className="flex">
          <li>About-me</li>
          <li>Portfolio</li>
          <li>Projects</li>
        </ul>
      </nav>
      <div style={{ width: `${logo_size}px` }}></div>
      {/* <div style={{ flexGrow: 1 }}></div> */}

      <style jsx>{`
        * {
          //outline: 1px solid white;
        }
        .logo_wrapper {
          position: relative;
        }

        @media (max-width: 370px) {
          .navbar__container {
            flex-direction: column;
            align-items: center;
          }
          .navbar__container ul {
            margin: 0;
            padding: 0;
          }

          .navbar__container nav {
            padding-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
