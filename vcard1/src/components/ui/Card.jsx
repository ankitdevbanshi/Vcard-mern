import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={
        className +
        " bg-white rounded-lg  shadow-2xl p-6 overflow-hidden md:m-12 mt-4"
      }
    >
      {children}
    </div>
  );
}

export default Card;
