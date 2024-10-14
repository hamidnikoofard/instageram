import React from "react";
const Button = ({ title, type, icon }) => {
  return (
    <div>
      <button
        className="bg-blue-400 hover:bg-[#1877f2] text-white w-full py-1 rounded-md font-semibold"
        type={type}
      >
        <div className="flex gap-2 justify-center items-center">
          {icon}
          {title}
        </div>
      </button>
    </div>
  );
};

export default Button;
