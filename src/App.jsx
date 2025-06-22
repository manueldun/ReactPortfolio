import { useState, useEffect } from "react";
import PortfolioBar from "./PortfolioBar/PortfolioBar.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import MovieBrowser from "./MovieBrowser/MovieBrowser.jsx";
import GourmetExpress from "./GourmetExpress/GourmetExpress.jsx";
import "./App.css";

function App() {
  const [currentPage, setcurrentPage] = useState("introPage");

  function handleSelect(selection) {
    switch (selection) {
      case "calculatorSelector":
        setcurrentPage("Calculator");
        break;
      case "movieBrowserSelector":
        setcurrentPage("MovieBrowser");
        break;
      case "restaurantSelector":
        setcurrentPage("GourmetExpress");
        break;
      case "selectionPage":
        setcurrentPage("introPage");
      default:
        break;
    }
  }
  let portfolio = <PortfolioBar onSelection={handleSelect} />;
  switch (currentPage) {
    case "introPage":
      portfolio = <PortfolioBar onSelection={handleSelect} />;
      break;
    case "Calculator":
      portfolio = <Calculator onSelection={handleSelect} />;
      break;
    case "MovieBrowser":
      portfolio = <MovieBrowser onSelection={handleSelect} />;
      break;
    case "GourmetExpress":
      portfolio = <GourmetExpress onSelection={handleSelect} />;
      break;
    default:
      break;
  }

  return portfolio;
}

export default App;
