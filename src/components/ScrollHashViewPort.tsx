import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollHashViewPort = () => {
  const location = useLocation();
  const lastHash = useRef<string>("");

//   console.log("location:", location);
//   console.log("lastHash:", lastHash);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash;
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = "";
        }
      }, 100);
    }
  }, [location]);

  return null;
};

export default ScrollHashViewPort;
