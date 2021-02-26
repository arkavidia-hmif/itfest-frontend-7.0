import * as React from "react";

interface Props {
  logo: string;
  title: string;
}

const LogoTitleCompany: React.FC<Props> = ({ logo, title }) => {
  return (
    <div className="flex-container mt-3">
      <img src={logo} className="logo-photo" />
      <div className="logo-title">
        <h1 className="title">{title}</h1>
      </div>
      <style jsx>{`
        .flex-container {
          text-align: left;
        }

        .logo-photo {
          max-width: 15rem;
          max-height: 5rem;
        }

        @media only screen and (max-width: 1000px) {
          .logo-photo {
            max-width: 80vw;
            max-height: 5rem;
          }

          .title {
            font-size: 2rem;
          }

          .flex-container {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoTitleCompany;