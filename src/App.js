import React, { useCallback, useEffect, useState } from "react";

const ClosuresInReact = () => {
  const [count, setCount] = useState("1");

  const incrementCount = useCallback(() => {
    setCount((prevCount) => +prevCount + 1);
  }, [setCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      incrementCount();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count, incrementCount]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "30px" }}>
      Timer started:{count}
    </div>
  );
};

export default ClosuresInReact;
