import { useState, useRef, useEffect } from "react";
import "./MovieBrowser.css";

function MovieStart(props) {
  const movieInputRef = useRef(null);
  async function handleSearch(e) {
    const query = movieInputRef.current.value;
    const queryUrl = new URL(
      "https://imdb.iamidiotareyoutoo.com/search?q=" + query,
    );
    const queryRequest = new Request(queryUrl);
    const response = await fetch(queryRequest);
    const responseReader = await response.body.getReader();
    const responseBuffer = await responseReader.read();
    const responseStr = new TextDecoder().decode(responseBuffer.value);
    const responseObj = JSON.parse(responseStr);
    props.onShowResult(responseObj.description);
  }
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div id="movieStart">
      <h1>Buscador de películas</h1>
      <input
        id="movieInput"
        ref={movieInputRef}
        type="text"
        placeholder="Ingrese texto para buscar."
      />
      <button id="movieButton" onClick={handleSearch}>
        Buscar Película
      </button>
      <p>Busca peliculas desde la API pública IMDbOT.</p>
    </div>
  );
}
export default MovieStart;
