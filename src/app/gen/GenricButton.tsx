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
    <div className="btn-div">
      <button onClick={onClick} className={`${style}`}>
        {text}
      </button>
    </div>
  );
};

export default GenricButton;
