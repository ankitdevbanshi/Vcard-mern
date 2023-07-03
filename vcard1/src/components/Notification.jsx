import React from "react";

function Notification({ status, message }) {
  console.log("status", status);
  return (
    <div
      className={`w-screen mt-8 z-10 absolute ${
        status == "error" ? "bg-red-600" : "bg-green-600"
      } text-white py-4 px-8`}
    >
      {message}
    </div>
  );
}

export default Notification;
