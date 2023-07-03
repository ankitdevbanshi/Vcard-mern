import React from "react";

function Blog() {
  return (
    <div className="relative inline-block place-self-center w-3/4 rounded-lg shadow-lg border border-gray-300 overflow-hidden bg-gray-600">
      <img
        src="logo192.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
      <div className="bg-white hover:opacity-40  cursor-pointer relative  p-4 flex items-center flex-col gap-12">
        <div className="bg-white shadow-md border border-gray-300 flex flex-col p-2 rounded-full absolute top-1/2 items-center gap-0">
          <h3 className="h3-gray">24</h3>
          <span>jul</span>
        </div>

        <img className="border border-b-gray-400 w-3/4" src="card.png" alt="" />

        <p className="text-gray-600 font-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        </p>
      </div>
    </div>
  );
}

export default Blog;
