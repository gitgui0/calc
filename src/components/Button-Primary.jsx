import React from "react";

const ButtonPrimary = ({
  children,
  operator,
  setOperator,
  symbol,
  setSymbol,
  num1,
  num2,
  op,
}) => {
  return (
    <button
      onClick={() => {
        if (num1 && operator && symbol) {
          setOperator(operator);
          setSymbol(symbol);
        }
      }}
      className={`cursor-pointer h-12 w-12 md:h-14 md:w-14 p-3 flex justify-center items-center rounded-full ${
        op === operator && num1 !== "" && num2 === ""
          ? "bg-pink-300"
          : "bg-pink-600"
      } `}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
