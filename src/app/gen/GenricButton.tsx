import React from "react";

interface GenricButtonProps {
  text: string;
  onClick?: () => void;
  style: string;
}

const GenricButton: React.FC<GenricButtonProps> = ({
  text,
  onClick,
  style,
}) => {
  return (
    <button onClick={onClick} className={`${style}`}>
      {text}
    </button>
  );
};

export default GenricButton;
