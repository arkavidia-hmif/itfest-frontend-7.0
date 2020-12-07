import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
// import FilledButton from "../FilledButton";
import { AuthContext } from "utils/context/auth";
import items from "utils/constants/nav-items";
import { Dimen } from "styles/dimen";

const NavDesktop: React.FC = () => {
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
      <ul className="right">
        <h1>Hi, John!</h1>
      </ul>
      {/* {authContext.authenticated ? (
        <FilledButton
          text="LOGOUT"
          padding="0.75em 1.5em"
          onClick={() => {
            authContext.setAuthenticated(false);
            authContext.setAuth();
          }}
        />
      ) : (
        <FilledButton
          text="LOGIN"
          padding="0.75em 1.5em"
          onClick={() => {
            router.push("/login");
          }}
        />
      )} */}

      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          height: 100%;
        }
        ul.right {
          display: flex;
          justify-content: flex-end;
          margin-right: 2rem;
          margin-top: 1rem;
        }
        .right h1 {
          margin: 0;
        }
        a {
          color: #623fa2;
          font-family: Viga;
          font-style: normal;
          font-weight: normal;
          font-size: 1.2rem;
          text-decoration: none;
          outline: none;
        }

        li {
          margin: 0 3rem;
          position: relative;
          font-size: 0.9rem;
        }

        .items {
          // margin-left: 2rem;
          // margin-right: auto;
          display: flex;
          align-items: center;
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

        @media (max-width: ${Dimen.navbarBreakpoint}) {
          .indicator {
            height: 3px;
          }

          li {
            margin: 0 2rem;
          }
          a {
            font-size: 0.8rem;
          }
          ul:first-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default NavDesktop;
