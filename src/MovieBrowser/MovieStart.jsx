import { useState, useRef, useEffect } from "react";
import "./MovieBrowser.css";

function MovieStart(props) {
  const movieInputRef = useRef(null);
  const movieStartRef = useRef(null);
  function handleSearch(e) {
    if (movieInputRef.current.value !== "") {
      const appearKeyframes = [{ opacity: "1.0" }, { opacity: "0.0" }];
      const appearTiming = {
        easing: "ease-out",
        duration: 500,
        iterations: 1,
        fill: "forwards",
      };
      movieStartRef.current.animate(appearKeyframes, appearTiming).onfinish =
        () => {
          props.onSearch(movieInputRef.current.value);
        };
    }
  }
  let appearAnimation = new Animation();
  useEffect(() => {
    const appearKeyframes = [{ opacity: "0.0" }, { opacity: "1.0" }];
    const appearTiming = {
      easing: "ease-out",
      duration: 500,
      iterations: 1,
      fill: "forwards",
    };
    appearAnimation = movieStartRef.current.animate(
      appearKeyframes,
      appearTiming,
    );
    return () => {
      appearAnimation.cancel();
    };
  }, []);

  return (
    <div id="movieStart" ref={movieStartRef}>
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
      {props.error && (
        <p>
          <span id="error">
            Parece que hubo un problema, intentelo nuevamente.
          </span>
        </p>
      )}
    </div>
  );
}
export default MovieStart;
