import React from "react";

const Panel = ({ num1, num2, operator, symbol }) => {
  return (
    <div className="bg-pink-100 text-xl flex items-center justify-end text-black min-h-15">
      {num1 === "" && num2 === "" && operator === "" ? (
        <h1></h1>
      ) : num1 !== "" && num2 === "" ? (
        <h1>{num1}</h1>
      ) : num1 !== "" && num2 !== "" ? (
        <h1>{num2}</h1>
      ) : null}
    </div>
  );
};

export default Panel;