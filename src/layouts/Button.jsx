import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className=" bg-sky-900 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button
