import * as React from "react";
import Link from "next/link";
import { SubMenuItem } from "interfaces/nav-items";

interface Props {
  items: SubMenuItem[];
  hover: boolean;
  setHover: (input: boolean) => void;
}

const SubMenu: React.FC<Props> = ({ items, hover, setHover }) => {
  return (
    <div
      className="sub-menu"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <ul className="mr-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .sub-menu {
          background: #ffff;
          width: 250px;
          position: absolute;
          top: 2.5rem;
          left: -1rem;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          transition: visibility 0.2s, opacity 0.2s linear;
        }

        ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding-left: 1rem;
        }

        li {
          padding: 1rem 0;
        }

        a {
          color: #623fa2;
          font-family: Viga;
          font-style: normal;
          font-weight: normal;
          font-size: 1.5rem;
          text-decoration: none;
        }

        a:hover {
          color: #987ccc;
        }
      `}</style>
      <style jsx>{`
        .sub-menu {
          visibility: ${hover ? "visible" : "hidden"};
          opacity: ${hover ? 1 : 0};
        }
      `}</style>
    </div>
  );
};

export default SubMenu;
