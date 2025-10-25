import React, { useEffect } from "react";

const useDebounce = (input, cb, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      cb();
    }, delay);

    return () => clearTimeout(timer);
  }, [input]);
};

export default useDebounce;
