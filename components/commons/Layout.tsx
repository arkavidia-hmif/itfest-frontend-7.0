import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import { Theme } from "styles/theme";
// import Navbar from "./navbar/Navbar";

interface Props {
  children?: ReactNode;
  title?: string;
  background?: string;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  background = Theme.bgColors.whblpi,
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
      {/* <Navbar /> */}
      <div id="main-container">{children}</div>
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
      `}</style>
    </div>
  );
};

export default Layout;
