import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({
  title,
  type,
  icon,
  variant = "primary",
  onClick,
  address,
  className = "",
  ...props
}) => {
  const baseStyles =
    "py-1 rounded-md font-semibold transition-all duration-300 w-full flex justify-center ";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-black hover:bg-gray-300",
    follow: "bg-blue-500 text-white hover:bg-blue-600",
    unfollow: "bg-white text-black border border-gray-400 hover:bg-gray-100",
  };

  return (
    <div>
      {address ? (
        <div>
          <Link
            className={`${baseStyles} ${variants[variant]} ${className}`}
            type={type}
            onClick={onClick}
            to={address}
            {...props}
          >
            <div className="flex gap-2 justify-center items-center">
              {icon}
              {title}
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            type={type}
            onClick={onClick}
            {...props}
          >
            <div className="flex gap-2 justify-center items-center">
              {icon}
              {title}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomLink;
