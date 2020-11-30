import Link from "next/link";
import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import { Dimen } from "styles/dimen";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const burgerProps = {
    open: open,
    setOpen: setOpen,
  };

  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={onTop ? "" : "shadow"}>
      <BurgerMenu {...burgerProps} />
      <nav className="container-fluid max-content">
        <Burger {...burgerProps} />
        {!open ? (
          <div className="text-center">
            <Link href="/">
              <a>
                <img
                  src="https://www.arkavidia.id/img/logo-horizontal.svg"
                  alt="Logo Arkavidia"
                />
              </a>
            </Link>
          </div>
        ) : (
          <NavDesktop />
        )}
        {/* <div className="logo pl-md-3">
          <Link href="/">
            <a>
              <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
            </a>
          </Link>
        </div>
        <div id="spacer" /> */}
      </nav>

      <style jsx>{`
        header {
          position: sticky;
          position: -webkit-sticky;
          top: 0;
          z-index: 20;
          background: #ffff;
          transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        img {
          height: 100%;
          width: 100%;
        }
        header.shadow {
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }
        .text-center {
          text-align: center;
          height: 70%;
        }
        nav {
          background: #ffff;
          display: flex;
          width: 100%;
          height: ${Dimen.navbarHeight};
          align-items: center;
          justify-content: center;
        }

        .logo {
          max-width: 300px;
        }

        .logo img {
          height: 60px;
        }

        @media (max-width: ${Dimen.navbarBreakpoint}) {
          #spacer {
            flex-grow: 1 !important;
          }
          .logo img {
            height: 30px;
          }
          nav {
            height: ${Dimen.navbarMobileHeight};
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
