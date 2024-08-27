import ButtonPrimary from "./components/Button-Primary";
import ButtonSecondary from "./components/Button-Secondary";
import ButtonOther from "./components/Button-Other";
import Panel from "./components/Panel";
import { FaPlus, FaEquals, FaDivide, FaMinus } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [operator, setOperator] = useState(null);
  const [symbol, setSymbol] = useState(null);

  const calculateResult = () => {
    const number1 = parseFloat(num1.toString().replace(/,/g, "")) || 0;
    const number2 = parseFloat(num2.toString().replace(/,/g, "")) || 0;

    console.log("n1", number1)
    console.log("n2", number2)
    let result;
  
    switch (symbol) {
      case "+":
        console.log("sum")
        result = number1 + number2;
        break;
      case "-":
        console.log("minus")
        result = number1 - number2;
        break;
      case "x":
        console.log("vezes")
        result = number1 * number2;
        break;
      case "/":
        console.log("div")
        result = number2 !== 0 ? number1 / number2 : "Erro"; // Avoid division by zero
        break;
      default:
        result = 0;
    }

    console.log("result", result)
  
    // Convert result to a string and format it to avoid excessive decimal places
    setNum1(result.toString().replace(/\.?0+$/, ""));
    setNum2("");
    setOperator(null);
  };
  

  const clearEntry = () => {
    setNum1("");
    setNum2("");
    setOperator(null);
  };

  const changeNum = (num) => {
    if (operator === null || operator === undefined) {
      if (num === "." && num1.includes(".")) return; // Prevent multiple decimals
      if (num1.length < 9) {
        setNum1((prevNum1) => prevNum1 + num);
      }
    } else {
      if (num === "." && num2.includes(".")) return; // Prevent multiple decimals
      if (num2.length < 9) {
        setNum2((prevNum2) => prevNum2 + num);
      }
    }
  };

  return (
    <div className="App bg-pink-50 min-h-screen flex flex-col justify-center items-center space-y-2 px-4 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-pink-200 p-4 rounded-lg shadow-sm">
        <Panel num1={num1} num2={num2} symbol={symbol} />
      </div>
      <div className="flex space-x-2">
        <div className="flex flex-col">
          <div className="flex space-x-1">
            <div onClick={() => clearEntry()}>
              <ButtonOther>C</ButtonOther>
            </div>
            <div
              onClick={() => {
                if (num1 !== "" && num2 === "") {
                  if (num1.includes("-")) {
                    setNum1(num1.replace("-", ""));
                  } else {
                    setNum1("-" + num1);
                  }
                } else if (num1 !== "" && num2 !== "") {
                  if (num2.includes("-")) {
                    setNum2(num2.replace("-", ""));
                  } else {
                    setNum2("-" + num2);
                  }
                }
              }}
            >
              <ButtonOther>-/+</ButtonOther>
            </div>
            <div
              onClick={() => {
                if (num1 !== "" && num2 === "") {
                  setNum1(Number(num1) / 100);
                } else if (num1 !== "" && num2 !== "") {
                  setNum2(Number(num2) / 100);
                }
              }}
            >
              <ButtonOther>%</ButtonOther>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 flex-1">
            <ButtonSecondary changeNum={changeNum} num={"7"}>
              7
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"8"}>
              8
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"9"}>
              9
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"4"}>
              4
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"5"}>
              5
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"6"}>
              6
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"1"}>
              1
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"2"}>
              2
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"3"}>
              3
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={"0"} double={true}>
              0
            </ButtonSecondary>
            <ButtonSecondary changeNum={changeNum} num={","}>
              ,
            </ButtonSecondary>
          </div>
        </div>

        <div className="flex flex-col space-y-2 ml-2">
          <ButtonPrimary
            num1={num1}
            num2={num2}
            symbol={"/"}
            setSymbol={setSymbol}
            operator={"divide"}
            op={operator}
            setOperator={setOperator}
          >
            <FaDivide color="white" />
          </ButtonPrimary>
          <ButtonPrimary
            num1={num1}
            num2={num2}
            symbol={"x"}
            setSymbol={setSymbol}
            operator={"multiply"}
            op={operator}
            setOperator={setOperator}
          >
            <FaPlus className="transform rotate-45" color="white" />
          </ButtonPrimary>
          <ButtonPrimary
            num1={num1}
            num2={num2}
            symbol={"-"}
            setSymbol={setSymbol}
            operator={"subtract"}
            op={operator}
            setOperator={setOperator}
          >
            <FaMinus color="white" />
          </ButtonPrimary>
          <ButtonPrimary
            num1={num1}
            num2={num2}
            symbol={"+"}
            setSymbol={setSymbol}
            operator={"add"}
            op={operator}
            setOperator={setOperator}
          >
            <FaPlus color="white" />
          </ButtonPrimary>
          <div
            onClick={() => {
              if (num1 && num2 && operator) {
                calculateResult();
              }
            }}
          >
            <ButtonPrimary
              num1={num1}
              num2={num2}
              operator={"result"}
              setOperator={setOperator}
            >
              <FaEquals color="white" />
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
