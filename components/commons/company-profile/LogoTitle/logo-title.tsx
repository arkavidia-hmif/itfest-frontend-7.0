import * as React from "react";

interface Props {
  logo: string;
  title: string;
}

const LogoTitleCompany: React.FC<Props> = ({logo, title}) => {
  return (
    <div className="flex-container">
      <img src={logo} className="logo-photo"/>
      <div className="logo-title">
        <h1 className="title">{title}</h1>
      </div>
      <style jsx>{`
        .flex-container {
          display: flex;
          flex-direction: row;
          margin-top: 3%;
        }

        .logo-photo {
          max-width: 5rem;
        }

        .logo-title {
          display: flex;
          align-items: center;
          margin-left: 1.5rem;
        }

        @media only screen and (max-width: 1000px) {
          .logo-photo {
            max-width: 3rem;
          }

          .title {
            font-size: 2rem;
          }

          .flex-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoTitleCompany;