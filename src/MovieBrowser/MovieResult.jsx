import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import "./MovieBrowser.css";

function MovieResult(props) {
  const inputRef = useRef(null);
  let id = 0;
  for (let result of props.results) {
    result.id = id;
    id++;
  }
  const firstResults = props.results.slice(0, 6);
  function handleEnter(e) {
    if (e.key === "Enter") {
      props.onSearch(inputRef.current.value);
    }
  }
  return (
    <div id="movieResultPage">
      <input
        id="movieInputResult"
        type="text"
        placeholder="Ingrese texto para buscar."
        onKeyDown={handleEnter}
        ref={inputRef}
      />
      <div id="movieResult">
        {firstResults.map((item) => {
          return <MovieCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
export default MovieResult;
