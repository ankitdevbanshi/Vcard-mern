import React from "react";

function Comments() {
  return (
    <div className="p-6">
      <div className="flex gap-4 items-center">
        <img
          className=" w-16 rounded-full border border-gray-500"
          src="close.png"
          alt=""
        />
        <div className="flex-1">
          <h4 className="h4-gray">name</h4>
          <span>date</span>
        </div>
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        mollitia suscipit magni est dolorum sed.
      </p>
    </div>
  );
}

export default Comments;
