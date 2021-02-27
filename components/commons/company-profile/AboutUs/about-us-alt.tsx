import * as React from "react";
import Linkify from "react-linkify";
interface Props {
  aboutUs: string;
}
const AboutUsAlt: React.FC<Props> = ({ aboutUs }) => {
  return (
    <div className="flex-container-alt">
      <p className="title">Tentang Kami</p>
      <p className="description-text-alt"><Linkify>{aboutUs}</Linkify></p>
      <style jsx>{`
        .title {
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
          .flex-container-alt {
            margin-top: 10%;
          }

          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsAlt;