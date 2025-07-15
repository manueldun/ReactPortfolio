import { useState, useRef, useEffect } from "react";
import "./MovieBrowser.css";

function MovieStart(props) {
  const movieInputRef = useRef(null);
  function handleSearch(e) {
    props.onSearch(movieInputRef.current.value);
  }
  return (
    <div id="movieStart">
      <h1>Buscador de películas</h1>
      <input
        id="movieInput"
        ref={movieInputRef}
        type="text"
        placeholder="Ingrese texto para buscar."
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch(event);
          }
        }}
      />
      <button id="movieButton" onClick={handleSearch}>
        Buscar Película
      </button>
      <p>Busca peliculas desde la API pública IMDbOT.</p>
    </div>
  );
}
export default MovieStart;
