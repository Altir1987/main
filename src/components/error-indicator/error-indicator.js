import React from "react";
import icon from "./tesla.png";


const ErrorIndicator = () => {
  return(
    <div className="error-indication">
      <img src={icon} alt="error image"/>
      <span className="boom">BOOM</span>
      <span>
        Что то не так!
      </span>
      <span>
             (но мы пытаемся это устранить)
      </span>
    </div>
  );
};

export default ErrorIndicator
