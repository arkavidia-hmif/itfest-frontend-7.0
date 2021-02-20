import * as React from "react";
import { ButtonColor, Theme } from "styles/theme";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  submit?: boolean;
  padding?: string;
  color?: ButtonColor;
  loading?: boolean;
  fontSize?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const FilledButton: React.FC<Props> = ({
  onClick,
  text,
  padding,
  loading,
  submit,
  fontSize = "1rem",
  fullWidth,
  disabled,
  color = Theme.buttonColors.pinkButton,
}) => {

  const clickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((!loading && !disabled) && onClick) {
      onClick(evt);
    }
  };

  return (
    <>
      <button
        id="container"
        onClick={clickHandler}
        style={{ padding }}
        type={submit ? "submit" : "button"}
      >
        <div id="loader"></div>
        <b>{text}</b>
      </button>
      <style jsx>{`
      button {
        border: 0;
        outline: 0;
      }
      #container {
        border: 0;
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: ${color.main};
        color: white;
        transition: background-color 0.1s;
        position: relative;
        font-size: ${fontSize};
        width: ${fullWidth ? "100%" : ""};
      }

      #loader {
        display: none;

        border: 4px solid white;
        border-top: 4px solid transparent;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;

        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
      <style jsx>{`

      #loader {
        ${loading ? "display: block" : ""}
      }
      #container {
        ${loading ? "color: " + color.main + ";" : ""}
        ${disabled ? "filter: grayscale(100%);" : ""}
        ${(loading || disabled) ? "cursor: auto;" : "cursor: pointer;"}
      }
      #container:hover, #container:focus {
        ${(loading || disabled) ? "" : "background-color: " + color.hover}
      }
    `}</style>
    </>
  );
};

export default FilledButton;
