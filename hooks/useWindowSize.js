import { useState, useEffect } from 'react'



export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0
  });

  function changeWindowSize() {
    setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}