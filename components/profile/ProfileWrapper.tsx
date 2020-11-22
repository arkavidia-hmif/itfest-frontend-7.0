import ColorfulHeader from "components/ColorfulHeader";
import { ReactNode } from "react";
import { Theme } from "styles/theme";

interface Props {
  children: ReactNode;
}

const ProfileWrapper: React.FC<Props> = ({children}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ColorfulHeader
            color={Theme.headerColors.pipl}
            headingLevel={6}
            size="2rem"
          >
            Hi, John!
          </ColorfulHeader>
        </div>
        <div className="col-1 points mr-1">
          <h2 id="point">Points<div className="indicator"></div></h2>
        </div>
        <div className="col-1">
          <h2>1000</h2>
        </div>
        <div className="row pt-3">
          <div className="col-12">{children}</div>
        </div>
      </div>
    <style jsx>{`
      .points {
        max-width: 4.5em;
      }
      #point {
        color: #441985;
      }
      .indicator {
        position: absolute;
        width: 100%;
        height: 0.25em;
        background: linear-gradient(90deg, #fe789a 0%, #623FA2 100%);
      }
    `}</style>
    </div>
  );
};

export default ProfileWrapper;