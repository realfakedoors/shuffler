import { FC } from "react";

import "./Button.css";

interface Props {
  buttonText: string;
  buttonColor: string;
  clickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ buttonText, buttonColor, clickFunction }) => {
  const buttonStyle = {
    backgroundColor: buttonColor,
  };
  return (
    <button className="button" onClick={clickFunction} style={buttonStyle}>
      {buttonText}
    </button>
  );
};

export default Button;
