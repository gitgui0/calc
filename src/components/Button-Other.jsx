import React from "react";

const ButtonOther = ({ children }) => {
  return (
    <div className="cursor-pointer h-12 md:h-14 p-3 w-12 md:w-14 flex justify-center items-center rounded-full bg-pink-400">
      {children}
    </div>
  );
};

export default ButtonOther;
