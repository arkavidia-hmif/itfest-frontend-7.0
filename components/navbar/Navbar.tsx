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

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
  }, []);

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
        <NavDesktop open={open} />
        <div id="hero-container" className="align-items-center w-100 justify-content-center">
          <Link href="/">
            <a>
              <div className="itfest-container d-flex align-items-center">
                <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
                <h1>IT FEST</h1>
              </div>
            </a>
          </Link>
        </div>
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
        header.shadow {
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }

        .itfest-container h1 {
          margin: 0 0 0 1rem;
          font-size: 1.7rem;
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
        }

        img {
          height: 40px;
        }

        @media screen and (max-width: ${Dimen.mdBreakpoint}){
          .itfest-container img{
            height: 20px;
          }
          .itfest-container h1{
            font-size: 1.5rem;
          }
        }

        @media (max-width: ${Dimen.navbarBreakpoint}) {
          nav {
            height: ${Dimen.navbarMobileHeight};
          }
        }
      `}</style>
      <style jsx>{`
        #hero-container {
          display: ${open ? "none" : "flex"};
        }  

        @media (max-width: ${Dimen.navbarBreakpoint}) {
          #hero-container {
            display: flex;
          } 
        }
      `}</style>
    </header>
  );
};

export default Navbar;
