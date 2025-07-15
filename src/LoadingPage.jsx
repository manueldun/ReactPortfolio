import { useState, useRef, useEffect } from "react";
import "./Loading.css";
function LoadingPage(props) {
  const loadingRef = useRef(null);
  const [endLoading, setEndLoading] = useState(false);
  const introAnimationEndRef = useRef(false);
  const introAnimationStartRef = useRef(false);
  const loaderRef = useRef(null);
  useEffect(() => {
    let appearAnimation = new Animation();
    if (props.visible && !introAnimationStartRef.current) {
      console.log("animate");
      introAnimationStartRef.current = true;
      const appearFrames = [{ opacity: "0.0" }, { opacity: "1.0" }];
      const appearTiming = {
        easing: "ease-out",
        duration: 500,
        iterations: 1,
        fill: "forwards",
      };
      appearAnimation = loaderRef.current.animate(appearFrames, appearTiming);

      appearAnimation.onfinish = () => {
        introAnimationEndRef.current = true;
      };
    } else {
      introAnimationEndRef.current = true;
    }

    return () => {
      if (!props.visible && introAnimationStartRef.current) {
      }
    };
  }, [props.visible]);

  useEffect(() => {
    let vanishAnimation = new Animation();
    if (!props.visible && introAnimationEndRef.current) {
      introAnimationEndRef.current = false;
      const vanishframes = [{ opacity: "1.0" }, { opacity: "0.0" }];
      const vanishtiming = {
        easing: "ease-out",
        duration: 1000,
        iterations: 1,
        fill: "forwards",
      };
      vanishAnimation = loadingRef.current.animate(vanishframes, vanishtiming);

      vanishAnimation.onfinish = () => {
        setEndLoading(true);
        loadingRef.current.style.display = "none";
      };
    }
    return () => {
      setEndLoading(true);
    };
  }, [props.visible, introAnimationStartRef.current]);

  let loadingPage = (
    <div ref={loadingRef} id="loading">
      <div ref={loaderRef} className="loader"></div>
      <h2>Loading Posters</h2>
    </div>
  );
  return loadingPage;
}

export default LoadingPage;
