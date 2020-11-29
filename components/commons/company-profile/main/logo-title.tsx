import * as React from "react";

interface Props {
  type: string;
}

const LogoTitleCompany: React.FC<Props> = ({type}) => {
  return (
    <>
      {type === "main" ?
        <div className="flex-container">
          <img src="/img/company-profile/logocompany.png" className="logo-photo"/>
          <div className="logo-title">
            <h1>Dinosaurus</h1>
          </div>
        </div>
        :
        <div className="flex-container-alt">
          <img src="/img/company-profile/logocompany.png" className="logo-photo-alt"/>
          <div className="logo-title">
            <h1>Dinosaurus</h1>
          </div>
        </div>
      }
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: row;
        }

        .flex-container-alt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .logo-photo {
            max-width: 5rem;
        }

        .logo-photo-alt {
            max-width: 5rem;
            margin-bottom: 1%;
        }

        .logo-title {
            display: flex;
            align-items: center;
            margin-left: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default LogoTitleCompany;