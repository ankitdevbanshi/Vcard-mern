import React from "react";

function Pricing() {
  return (
    <div className="flex py-5 px-3 items-center flex-col gap-4 border border-gray-500">
      <span>plan 1</span>
      <h1 className="h3-gray">10000Rs.</h1>
      <span>per month</span>
      <button className="py-2 px-4 rounded bg-gray-600 hover:bg-gray-700 font-bold text-white">
        free trail
      </button>
      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        libero, in accusamus harum recusandae dolorum.
      </p>
    </div>
  );
}

export default Pricing;
