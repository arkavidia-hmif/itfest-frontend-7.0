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
            <h1 className="title">Dinosaurus</h1>
          </div>
        </div>
        :
        <div className="flex-container-alt">
          <img src="/img/company-profile/logocompany.png" className="logo-photo-alt"/>
          <div className="logo-title-alt">
            <h1 className="title">Dinosaurus</h1>
          </div>
        </div>
      }
      <style jsx>{`
        .flex-container {
            display: flex;
            flex-direction: row;
            margin-left: 10%;
            margin-right: 10%;
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

        .logo-title-alt {
            display: flex;
            align-items: center;
        }

        @media only screen and (max-width: 1000px) {
            .logo-photo {
                max-width: 3rem;
            }

            .logo-photo-alt {
                max-width: 4rem;
            }

            .title {
                font-size: 2rem;
            }
        }
      `}</style>
    </>
  );
};

export default LogoTitleCompany;