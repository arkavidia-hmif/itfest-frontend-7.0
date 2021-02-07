import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { AuthContext } from "utils/context/auth";
import items from "utils/constants/nav-items";
import { Dimen } from "styles/dimen";
import FilledButton from "components/commons/FilledButton";

interface Props {
  open: boolean;
}

const NavDesktop: React.FC<Props> = ({ open }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  return (
    <div className="items">
      <ul className="">
        {items.map((link, index) => {
          if (link.protected && !authContext.authenticated) {
            return;
          }

          let className = "";
          if (link.haveChild && router.pathname.startsWith(link.path)) {
            className = "current";
          } else if (!link.haveChild && router.pathname === link.path) {
            className = "current";
          }

          return (
            <li key={index} className="mt-2">
              <Link href={link.path}>
                <a className={className}>{link.text}</a>
              </Link>
              <div className="indicator"></div>
            </li>
          );
        })}
      </ul>
      {authContext.authenticated ? (
        <p id="name-text"><b>Hi, {authContext.profile?.name}</b></p>
      ) :
        (
          <FilledButton
            text="LOGIN"
            padding="0.75em 1.5em"
            onClick={() => {
              router.push("/login");
            }}
          />)}

      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          height: 100%;
          padding-left: 4rem;
        }

        #name-text {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          background: linear-gradient(to right, #fe5982, #441985);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        a {
          color: #623fa2;
          font-family: Viga;
          font-style: normal;
          font-weight: normal;
          font-size: 1.5rem;
          text-decoration: none;
          outline: none;
        }

        li {
          margin: 0 2rem;
          position: relative;
          font-size: 0.9rem;
        }

        .items {
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .indicator {
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #00ffff 0%, #623fa2 100%);
          transition: opacity 0.1s ease-in;
          transform-origin: 1px;
        }

        a:hover + .indicator {
          opacity: 1;
        }

        a.current + .indicator {
          opacity: 1;
        }

        a:focus {
          border: black 1px solid;
        }

        @media (max-width: ${Dimen.lgBreakpoint}){
          ul {
            width: 100%;
            justify-content: center;
            padding-left: 0;
          }

          #name-text {
            display: none;
          }
        }
      `}</style>
      <style jsx>{`
        .items {
          display: ${open ? "flex" : "none"};
        }  

        @media (max-width: ${Dimen.navbarBreakpoint}) {
          .items {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default NavDesktop;
