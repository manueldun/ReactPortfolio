import { useState, useRef, useEffect } from "react";
import "./Loading.css";
function LoadingPage(props) {
  const loadingRef = useRef(null);
  const [endLoading, setEndLoading] = useState(false);
  const loaderRef = useRef(null);
  const appearedRef = useRef(false);
  useEffect(() => {
    console.log(props.loadingStarted);
    if (props.loadingStarted || props.loadingRestarted) {
      appearedRef.current = true;
      console.log("Appearing loadpage");
      appear();
    }

    return () => {};
  }, [props.loadingStarted, props.loadingRestarted, props.loadingTrigger]);

  useEffect(() => {
    if (props.loadingEnded) {
      console.log("Disappearing");
      disappear();
    }

    return () => {};
  }, [props.loadingEnded]);

  function appear() {
    const appearFrames = [{ opacity: "0.0" }, { opacity: "1.0" }];
    const appearTiming = {
      easing: "linear",
      duration: 500,
      iterations: 1,
      fill: "forwards",
    };
    const appearAnimation = loadingRef.current.animate(
      appearFrames,
      appearTiming,
    );

    appearAnimation.onfinish = () => {
      props.onLoaderApearEnded();
      appearedRef.current = false;
    };
  }
  function disappear() {
    let vanishAnimation = new Animation();
    const vanishframes = [{ opacity: "1.0" }, { opacity: "0.0" }];
    const vanishtiming = {
      easing: "linear",
      duration: 1000,
      iterations: 1,
      fill: "forwards",
    };
    vanishAnimation = loadingRef.current.animate(vanishframes, vanishtiming);

    vanishAnimation.onfinish = () => {
      console.log("asdad");
      loadingRef.current.style.pointerEvents = "none";
      props.onLoaderDissapearEnded();
    };
  }

  let loadingPage = (
    <div ref={loadingRef} id="loading">
      <div ref={loaderRef} className="loader"></div>
      <h2>Loading Posters</h2>
    </div>
  );
  return loadingPage;
}

export default LoadingPage;
