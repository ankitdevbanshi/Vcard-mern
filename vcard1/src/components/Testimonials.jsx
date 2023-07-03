import React from "react";

function Testimonials() {
  return (
    <div className="bg-gray-600 text-white shrink-0 w-64 flex flex-col gap-6 card p-4 rounded-lg border border-gray-400">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo
        aliquam eum reprehenderit nisi provident ab. Incidunt odit perspiciatis
        ipsum?
      </p>

      <div className="flex gap-3">
        <div className="rounded-full overflow-hidden w-12">
          <img src="facebook.png" alt="" />
        </div>
        <div className=" flex flex-col">
          <h4 className="h4-black">name</h4>
          <span>company</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
