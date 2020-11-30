import * as React from "react";
import AboutUsContent from "../../../../utils/context/constants/company-profile/about-us-data";

interface Props {
  type: string;
}
const AboutUs: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <p className="title-main">Tentang Kami</p>
          <p className="description-text-main">{AboutUsContent[0].content}</p>
        </div>
        :
        <div className="flex-container-alt">
          <p className="title">Tentang Kami</p>
          <p className="description-text-alt">{AboutUsContent[0].content}</p>
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
            margin-left: 15%;
            margin-right: 15%;
            margin-top: 3%;
        }

        .description-text-main {

        }

        .description-text-alt {
            text-align: center;
        }

        @media only screen and (max-width: 1000px) {
            .flex-container {
                margin-top: 5%;
                justify-content: center;
            }

            .flex-container-alt {
                margin-top: 5%;
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
            }
        }
      `}</style>
    </>
  );
};

export default AboutUs;