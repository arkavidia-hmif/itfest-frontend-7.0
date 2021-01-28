import * as React from "react";

interface Props {
  type: string;
  aboutUs: string;
}
const AboutUs: React.FC<Props> = ({type, aboutUs}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <p className="title-main">Tentang Kami</p>
          <p className="description-text-main">{aboutUs}</p>
        </div>
        :
        <div className="flex-container-alt">
          <p className="title">Tentang Kami</p>
          <p className="description-text-alt">{aboutUs}</p>
        </div>
      }
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: column;
            margin-top: 3%;
        }

        .title {
            font-size: 1.8rem;
        }

        .title-main {
            font-size: 1.8rem;
        }

        .flex-container-alt {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5%;
        }

        .description-text-alt {
            text-align: center;
            margin-left: 10%;
            margin-right: 10%;
        }

        @media only screen and (max-width: 1000px) {
            .flex-container {
                margin-top: 5%;
                justify-content: center;
            }

            .flex-container-alt {
                margin-top: 10%;
            }

            .title {
                font-size: 1.5rem;
            }

            .title-main {
                text-align: center;
                font-size: 1.5rem;
            }

            .logo-photo-alt {
                max-width: 4rem;
            }

            .description-text {
                font-size: 2.6vw;
            }

            .description-text-main {
                text-align: center;
                margin-left: 10%;
                margin-right: 10%;
            }
        }
      `}</style>
    </>
  );
};

export default AboutUs;