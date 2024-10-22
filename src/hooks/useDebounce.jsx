import React, { useRef, useCallback } from 'react';

const useDebounce = (callback, delay) => {
  const timer = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedFunction;
};

export default useDebounce;
