import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import "./MovieBrowser.css";

function MovieResult(props) {
  let id = 0;
  for (let result of props.results) {
    result.id = id;
    id++;
  }
  const firstResults = props.results.slice(0, 6);
  console.log(firstResults);
  return (
    <div id="movieResultPage">
      <input
        id="movieInputResult"
        type="text"
        placeholder="Ingrese texto para buscar."
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
