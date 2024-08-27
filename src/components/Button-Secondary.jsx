import React from "react";

const ButtonSecondary = ({ children, double, num, changeNum }) => {
  return (
    <button
      className={`select-none cursor-pointer h-12 md:h-14 p-3 flex items-center rounded-full bg-pink-200 ${
        double ? "col-span-2 justify-start" : "w-full md:w-14 justify-center"
      }`}
      onClick={() => changeNum(num)}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
