import { useEffect, useState } from "react";
import { AlertColor, Theme } from "styles/theme";

interface Props {
  color?: AlertColor;
  error: string | null;
  closable?: boolean;
}

const Alert: React.FC<Props> = ({
  color = Theme.alertColors.redAlert,
  error,
  closable = true
}) => {
  const [close, setClose] = useState(false);

  useEffect(() => {
    setClose(false);
  }, [error]);

  if (close || !error) {
    return <></>;
  } else {
    return (
      <>
        <div id="alert-body">
          <p>{error}</p>
          <div
            className={closable ? "" : "d-none"}
            id="close-btn"
            onClick={() => {
              setClose(true);
            }}
          >
            X
          </div>
        </div>
        <style jsx>{`
          #alert-body {
            width: 100%;
            background-color: ${color.main};
            padding: 1rem;
            padding-right: 2.5rem;
            border-radius: 5px;
            position: relative;
          }
          #alert-body p {
            margin: 0;
            color: ${color.text};
          }

          #close-btn {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;

            margin: 0;

            width: 1.5rem;
            height: 1.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            color: white;
            background-color: black;
            opacity: 0.5;

            cursor: pointer;
          }

          #close-btn:hover {
            opacity: 0.7;
          }
        `}</style>
      </>
    );
  }
};

export default Alert;
