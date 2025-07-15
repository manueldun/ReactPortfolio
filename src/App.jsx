import { useState, useEffect } from "react";
import PortfolioBar from "./PortfolioBar/PortfolioBar.jsx";
import Calculator from "./Calculator/Calculator.jsx";
import MovieBrowser from "./MovieBrowser/MovieBrowser.jsx";
import GourmetExpress from "./GourmetExpress/GourmetExpress.jsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("introPage");
  function handleGoingBack() {
    setCurrentPage("introPage");
  }
  function handleSelect(selection) {
    switch (selection) {
      case "calculatorSelector":
        setCurrentPage("Calculator");
        break;
      case "movieBrowserSelector":
        setCurrentPage("MovieBrowser");
        break;
      case "restaurantSelector":
        setCurrentPage("GourmetExpress");
        break;
      case "selectionPage":
        setCurrentPage("introPage");
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
      portfolio = (
        <Calculator onSelection={handleSelect} onGoingBack={handleGoingBack} />
      );
      break;
    case "MovieBrowser":
      portfolio = (
        <MovieBrowser
          onSelection={handleSelect}
          onGoingBack={handleGoingBack}
        />
      );
      break;
    case "GourmetExpress":
      portfolio = (
        <GourmetExpress
          onSelection={handleSelect}
          onGoingBack={handleGoingBack}
        />
      );
      break;
    default:
      break;
  }

  return portfolio;
}

export default App;
