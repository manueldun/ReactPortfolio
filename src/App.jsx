import { useState, useEffect } from "react";
import PortfolioBar from "./PortfolioBar/PortfolioBar.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import "./App.css";

function App() {
  const [currentPage, setcurrentPage] = useState("introPage");

  function handleSelect(selection) {
    switch (selection) {
      case "calculatorSelector":
        setcurrentPage("Calculator");
        break;
      case "exerciseLogSelector":
        console.log('setcurrentPage("excerciseLog");');
        break;
      case "restaurantSelector":
        console.log('setcurrentPage("Restaurant");');
        break;
      case "selectionPage":
        setcurrentPage("introPage");
      default:
        break;
    }
  }
  let portfolio = <PortfolioBar onSelection={handleSelect} />;
  portfolio = <PortfolioBar onSelection={handleSelect} />;
  switch (currentPage) {
    case "introPage":
      portfolio = <PortfolioBar onSelection={handleSelect} />;
      break;
    case "Calculator":
      portfolio = <Calculator onSelection={handleSelect}/>;
    default:
      break;
  }

  return portfolio;
}

export default App;
