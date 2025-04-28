import { useState } from "react";

function inputChangeHandle() {
  setInputValue();
}
function Calculator() {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [currentOp, setCurrentOp] = useState("=");
  function handleChange(e) {
    setInputValue(Number(e.target.value));
  }
  function handleClear() {
    setInputValue(0);
    setCurrentValue(0);
  }
  function handleAdd() {
    if (currentOp == "=") {
      setCurrentValue(inputValue);
    } else {
      setCurrentValue(currentValue + inputValue);
    }
    setCurrentOp("+");
    setInputValue(0);
  }
  function handleSubtract() {
    if (currentOp == "=") {
      setCurrentValue(inputValue);
    } else {
      setCurrentValue(currentValue - inputValue);
    }
    setCurrentOp("-");
    setInputValue(0);
  }
  function handleMultiply() {
    if (currentValue == 0) {
      setCurrentValue(inputValue);
    } else {
      setCurrentValue(inputValue * currentValue);
    }
    handleEqual();
    setInputValue(0);
    setCurrentOp("x");
  }
  function handleDivide() {
    if (currentValue == 0) {
      setCurrentValue(inputValue);
    } else {
      setCurrentValue(currentValue / inputValue);
    }
    setCurrentOp("/");
    handleEqual();
    setInputValue(0);
  }
  function handleEqual() {
    if (currentOp === "+") {
      setCurrentValue(currentValue + inputValue);
    } else if (currentOp === "-") {
      setCurrentValue(currentValue - inputValue);
    } else if (currentOp === "x") {
      setCurrentValue(currentValue - inputValue);
    } else if (currentOp === "/") {
      setCurrentValue(currentValue - inputValue);
    }
    setInputValue(0);
    setCurrentOp("=");
  }
  return (
    <>
      {currentValue} {currentOp}
      <input number="true" value={inputValue} onChange={handleChange} />
      <button onClick={handleClear}>C</button>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>x</button>
      <button onClick={handleDivide}>/</button>
      <button onClick={handleEqual}>=</button>
    </>
  );
}

export default Calculator;
