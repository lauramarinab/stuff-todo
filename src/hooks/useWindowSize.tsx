import * as React from "react";

const getViewportSize = () => ({
  windowWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  windowHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
});

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState(getViewportSize());

  const handleResize = () => {
    setWindowSize(getViewportSize());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export { getViewportSize, useWindowSize };
