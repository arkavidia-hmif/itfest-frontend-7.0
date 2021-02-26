import * as React from "react";

interface Props {
  logo: string;
  title: string;
}

const LogoTitleCompanyAlt: React.FC<Props> = ({ logo, title }) => {
  return (
    <div className="flex-container-alt">
      <img src={logo} className="logo-photo-alt" />
      <div className="logo-title-alt">
        <h1 className="title">{title}</h1>
      </div>
      <style jsx>{`
          .flex-container-alt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 3%;
          }

          .logo-photo-alt {
            max-width: 20rem;
            max-height: 5rem;
            margin-bottom: 1%;
          }

          .logo-title-alt {
            display: flex;
            align-items: center;
          }

          @media only screen and (max-width: 1000px) {
            .logo-photo-alt {
              max-width: 80vw;
              max-height: 5rem;
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

export default LogoTitleCompanyAlt;