import * as React from "react";

interface Props {
  aboutUs: string;
}
const AboutUs: React.FC<Props> = ({ aboutUs }) => {
  return (
    <div className="flex-container">
      <p className="title-main">Tentang Kami</p>
      <p className="description-text-main">{aboutUs}</p>
      <style jsx>{`
        .flex-container {
          display: flex;
          flex-direction: column;
          margin-top: 3%;
        }

        .title-main {
            font-size: 1.8rem;
        }

        @media only screen and (max-width: 1000px) {
          .flex-container {
              margin-top: 5%;
              justify-content: center;
          }

          .title-main {
              text-align: center;
              font-size: 1.5rem;
          }

          .description-text-main {
              text-align: center;
              margin-left: 10%;
              margin-right: 10%;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;