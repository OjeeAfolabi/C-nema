import React, { useEffect } from "react";
import "../CnemaLoader/cnema.css";

const Cnema = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div className="c-nema-container">
      <span className="c-nema-display bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        C
      </span>
    </div>
  );
};

export default Cnema;
