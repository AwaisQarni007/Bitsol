import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);

  const intervalRef = useRef();

  useEffect(() => {
    
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => setNum((prev) => prev + 1), 1000);
    }
    setPause((prev) => !prev);
    
  };
  return (
    <>
      <div>
        <div>{num}</div>
        <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
      </div>
    </>
  );
};

export default StopWatch;
