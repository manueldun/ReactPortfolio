import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import LoadingPage from "../LoadingPage.jsx";
import "./MovieBrowser.css";

function MovieResult(props) {
  const inputRef = useRef(null);
  const resultRef = useRef({});
  const resultPageRef = useRef(null);
  const [loadingStarted, setLoadingStarted] = useState(true);
  const [loadingRestarted, setLoadingRestarted] = useState(false);
  const [loadingTrigger, setLoadingTrigger] = useState(0);
  const [loadingEnded, setLoadingEnded] = useState(false);
  for (let i in props.results) {
    props.results[i].id = i;
  }
  let firstResults = props.results.slice(0, 6);
  const [result, setResult] = useState(firstResults);
  useEffect(() => {
    for (let i in props.results) {
      props.results[i].id = i;
    }
    let firstResults = props.results.slice(0, 6);
    setResult(firstResults);
    return () => {};
  }, [props.results]);

  function handleEnter(e) {
    if (e.code === "Enter" && e.target.value !== "") {
      setLoadingTrigger((prev) => (prev + 1) % 2);
      setLoadingRestarted(true);
      setLoadingEnded(false);
    }
  }
  function handleLoaderDisapearEnded() {}
  function handleLoaderAppearEnded() {
    if (loadingStarted) {
      resultPageRef.current.style.opacity = "1.0";
    }
    if (loadingRestarted) {
      setLoadingRestarted(false);
      props.onSearch(inputRef.current.value);
      resultPageRef.current.style.opacity = "1.0";
    }
  }
  return (
    <>
      <LoadingPage
        loadingStarted={loadingStarted}
        loadingEnded={loadingEnded}
        loadingTrigger={loadingTrigger}
        onLoaderDissapearEnded={handleLoaderDisapearEnded}
        onLoaderApearEnded={handleLoaderAppearEnded}
      />

      <div ref={resultPageRef} id="movieResultPage">
        <input
          id="movieInputResult"
          type="text"
          placeholder="Ingrese texto para buscar."
          onKeyDown={handleEnter}
          ref={inputRef}
        />
        <div id="movieResult">
          {result.map((item) => {
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
                    setLoadingEnded(true);
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
