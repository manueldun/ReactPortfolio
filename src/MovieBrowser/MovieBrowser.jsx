import { useState, useRef, useEffect } from "react";
import BackButton from "../BackButton.jsx";
import MovieStart from "./MovieStart.jsx";
import MovieResult from "./MovieResult.jsx";

function MovieBrowser(props) {
  function showResult(results) {
    setCurrentPage(<MovieResult results={results} />);
  }
  const [currentPage, setCurrentPage] = useState(
    <MovieStart onShowResult={showResult} />,
  );
  return (
    <div id="movieBrowser">
      {currentPage}
      <BackButton onSelection={props.onSelection}/>
    </div>
  );
}
export default MovieBrowser;
