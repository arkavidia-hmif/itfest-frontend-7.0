import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import { Theme } from "styles/theme";

interface Props {
  children?: ReactNode;
  title?: string;
  background?: string;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  background = Theme.bgColors.pitopl,
}) => {
  if (!title) {
    title = "Arkavidia 7.0";
  } else {
    title = title + " | Arkavidia 7.0";
  }

  return (
    <div id="parent-container">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div id="main-container">
        <div className="background-image">
          {children}
        </div>
      </div>
      <Footer />
      <style jsx>{`
        #parent-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        #main-container {
          background: ${background};
          flex: 1;
        }
        .background-image {
          background-image: url("/img/company-profile/background.png");
          background-size: cover;
          background-repeat: no-repeat;
        }

        @media only screen and (max-width: 1000px) {
          .background-image {
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
