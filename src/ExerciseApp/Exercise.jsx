
import { useState } from "react";
import PortfolioBar from "./PortfolioBar/PortfolioBar.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import ExcerciseLog from "./Exercise-Log/ExerciseLog.jsx";

function App() {
  return (
    <>
      <PortfolioBar />
      <Calculator />
      <ExerciseLog />
    </>
  );
}

export default App;
