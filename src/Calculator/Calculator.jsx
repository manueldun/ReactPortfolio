import { useState } from "react";
import "./Calculator.css";

function inputChangeHandle() {
  setInputValue();
}
function Calculator() {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [currentOp, setCurrentOp] = useState("=");
  function handleChange(e) {
    if (!isNaN(Number(e.target.value))) {
      setInputValue(Number(e.target.value));
      e.target.value = Number(e.target.value);
    }
  }
  function handleKeyDown(e) {
    switch (e.key) {
      case "+":
        handleAdd();
        break;
      case "-":
        handleSubtract();
        break;
      case "/":
        handleDivide();
        break;
      case "*":
        handleMultiply();
        break;
      case "Enter":
        handleEqual();
        break;
      case ".":
        break;
    }
  }
  function handleClear() {
    setInputValue(0);
    setCurrentValue(0);
  }
  function handleAdd() {
    calculate();
    setCurrentOp("+");
  }
  function handleSubtract() {
    calculate();
    setCurrentOp("-");
  }
  function handleMultiply() {
    calculate();
    setCurrentOp("x");
  }
  function handleDivide() {
    calculate();
    setCurrentOp("/");
  }
  function calculate() {
    switch (currentOp) {
      case "+":
        setCurrentValue(currentValue + inputValue);
        setInputValue(0);
        break;
      case "-":
        setCurrentValue(currentValue - inputValue);
        setInputValue(0);
        break;
      case "x":
        setCurrentValue(currentValue * inputValue);
        setInputValue(0);
        break;
      case "/":
        setCurrentValue(currentValue / inputValue);
        setInputValue(0);
        break;
      default:
        setCurrentValue(inputValue);
        setInputValue(0);
        break;
    }
  }
  function handleEqual() {
    calculate();
    setCurrentOp("=");
  }
  function handleWriteInput(e) {
    if (e.target.id === ".") {
      if (!isNaN(parseFloat(String(inputValue) + ".0"))) {
        setInputValue(String(inputValue) + ".0");
      }
    } else if (String(inputValue).slice(-2) == ".0") {
      setInputValue(Number(inputValue.slice(0, -1) + e.target.id));
    } else {
      setInputValue(Number(inputValue + e.target.id));
    }
  }
  return (
    <div id="calculator">
      <div id="answer">Answer={currentValue}</div>

      <input
        id="input"
        type="number"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClear} className="button">
        C
      </button>
      <button onClick={handleDivide} className="button">
        /
      </button>
      <button onClick={handleMultiply} className="button">
        X
      </button>
      <button onClick={handleSubtract} className="button">
        -
      </button>
      <button onClick={handleWriteInput} className="button" id="7">
        7
      </button>
      <button onClick={handleWriteInput} className="button" id="8">
        8
      </button>
      <button onClick={handleWriteInput} className="button" id="9">
        9
      </button>
      <button onClick={handleAdd} className="button plus">
        +
      </button>

      <button onClick={handleWriteInput} className="button" id="4">
        4
      </button>
      <button onClick={handleWriteInput} className="button" id="5">
        5
      </button>
      <button onClick={handleWriteInput} className="button" id="6">
        6
      </button>

      <button onClick={handleWriteInput} className="button" id="1">
        1
      </button>
      <button onClick={handleWriteInput} className="button" id="2">
        2
      </button>
      <button onClick={handleWriteInput} className="button" id="3">
        3
      </button>
      <button onClick={handleEqual} className="equal button">
        =
      </button>

      <button className="zero button">0</button>
      <button onClick={handleWriteInput} className="button" id=".">
        .
      </button>
    </div>
  );
}

export default Calculator;
