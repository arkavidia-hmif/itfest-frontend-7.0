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
<<<<<<< HEAD
          <div className="text-center">
            <Link href="/">
              <a>
                <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
              </a>
            </Link>
=======
          <div className="d-flex align-items-center">
            <div className="text-center">
              <Link href="/">
                <a>
                  <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
                </a>
              </Link>
              <div className="">
                <h1>IT FEST</h1>
              </div>
            </div>
>>>>>>> 64d340bba3f131091cccf420dd675b902edeb628
          </div>
        ) : (
          <NavDesktop />
        )}
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
          height: 60%;
          width: 60%;
        }
        header.shadow {
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }
        .text-center {
          display: flex;
          text-align: center;
          align-items: center;
          height: 70%;
        }

        .text-center h1 {
          font-size: 1.7rem;
          margin-top: 1rem;
          background: linear-gradient(to right, #fe5982, #441985);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        nav {
          background: #ffff;
          display: flex;
          width: 100%;
          height: ${Dimen.navbarHeight};
          align-items: center;
          justify-content: ${!open ? "center" : ""};
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

          img {
            height: 45%;
            width: 45%;
          }

          .text-center {
            display: flex;
            text-align: center;
            align-items: center;
            height: 70%;
          }

          .text-center h1 {
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
            margin-left: -4rem;
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
