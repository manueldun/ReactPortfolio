import { useState, useRef, useEffect } from "react";
import BackButton from "../BackButton.jsx";
import MovieStart from "./MovieStart.jsx";
import MovieResult from "./MovieResult.jsx";

function MovieBrowser(props) {
  async function handleSearch(query) {
    const queryUrl = new URL(
      "https://imdb.iamidiotareyoutoo.com/search?q=" + query,
    );
    const queryRequest = new Request(queryUrl);
    const response = await fetch(queryRequest);
    const responseReader = await response.body.getReader();
    const responseBuffer = await responseReader.read();
    const responseStr = new TextDecoder().decode(responseBuffer.value);
    const responseObj = JSON.parse(responseStr);
    setCurrentPage(
      <MovieResult results={responseObj.description} onSearch={handleSearch} />,
    );
  }
  const [currentPage, setCurrentPage] = useState(
    <MovieStart onSearch={handleSearch} />,
  );
  return (
    <div id="movieBrowser">
      {currentPage}
      <BackButton
        onSelection={props.onSelection}
        onGoingBack={props.onGoingBack}
      />
    </div>
  );
}
export default MovieBrowser;
