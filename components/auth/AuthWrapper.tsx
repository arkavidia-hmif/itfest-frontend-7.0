import { ReactNode } from "react";
import ColorfulHeader from "../commons/ColorfulHeader";
import Layout from "../commons/Layout";
import { Theme } from "../../styles/theme";
import GradientSeparator from "./GradientSeperator";

interface Props {
  children: ReactNode | ReactNode[],
  title: string
}

const AuthWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <Layout background={Theme.bgColors.whpipl} title={title}>
      <div className="container mx-auto row mb-3">
        <div className="col-lg-6 px-0 px-md-5 mt-5 mb-3">
          <ColorfulHeader color={Theme.headerColors.pipl} headingLevel={1} size="3rem">{title}</ColorfulHeader>
          <GradientSeparator />
          <br />
          {children}
        </div>
        <div className="col-lg-6">
          <img src="/img/bg-white.png" />
        </div>
        <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
      </div>
    </Layout>

  );
};

export default AuthWrapper;