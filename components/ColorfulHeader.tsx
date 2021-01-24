import * as React from "react";
import { Theme } from "styles/theme";

interface Props {
  children: React.ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  size?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const ColorfulHeader: React.FC<Props> = ({
  children,
  headingLevel = 1,
  color = Theme.headerColors.plbl,
  size,
}) => {
  const Tag = `h${headingLevel}` as HeadingTag;

  return (
    <>
      <Tag>
        <span>{children}</span>
      </Tag>
      <style jsx>{`
        ${Tag} {
          margin: 0;
        }

        span {
          background-size: 100%;
          background-image: ${color};

          background-clip: text;
          -webkit-background-clip: text;

          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;

          ${size ? "font-size:" + size + ";" : ""}
        }
      `}</style>
    </>
  );
};

export default ColorfulHeader;
