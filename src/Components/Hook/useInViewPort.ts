import { useEffect, useState } from "react";

export const useInViewPort = (id: string) => {
  const [InViewPort, setViewPort] = useState(false);
  const checkVP = () => {
    const elem = document.getElementById(id);
    if (elem) {
      const react = elem.getBoundingClientRect();
      const wh = window.innerHeight || document.documentElement.clientHeight;
      setViewPort(react.top >= 0 && react.bottom <= wh);
    } else {
      setViewPort(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      checkVP();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { InViewPort };
};
