import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import LoadingPage from "../LoadingPage.jsx";
import "./MovieBrowser.css";

function MovieResult(props) {
  const inputRef = useRef(null);
  const resultRef = useRef({});
  const [isLoading, setIsLoading] = useState(true);
  for (let i in props.results) {
    props.results[i].id = i;
  }
  let firstResults = props.results.slice(0, 6);
  function handleEnter(e) {
    if (e.key === "Enter" && inputRef.current.value !== "") {
      props.onSearch(inputRef.current.value);
    }
  }

  return (
    <>
      <LoadingPage visible={isLoading} />
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
            return (
              <MovieCard
                onLoadImg={(e) => {
                  const areImgsComplete = firstResults.reduce(
                    (accumulator, currentValue) => {
                      if (
                        accumulator &&
                        !resultRef.current[currentValue.id].complete
                      ) {
                        return false;
                      } else {
                        return accumulator;
                      }
                    },
                    true,
                  );
                  if (areImgsComplete) {
                    console.log("all loaded");
                    setIsLoading(false);
                  }
                }}
                onLoaded={() => {}}
                key={item.id}
                id={item.id}
                data={item}
                ref={(node) => {
                  resultRef.current[item.id] = node;
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default MovieResult;
