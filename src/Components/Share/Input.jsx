import React, { forwardRef, useState } from "react";

const Input = forwardRef(
  ({ placeholder, type, label, name, error , showPasswordToggle = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e) => {
      if (!e.target.value) {
        setIsFocused(false);
      }
    };

    const togglePassword = () => setShowPass(!showPass);

    return (
      <div className="relative flex flex-col w-full">
        <label
          htmlFor={name}
          className={`absolute left-2 transition-all duration-300  ${
            isFocused || props.value
              ? "-top-0 text-[10px] text-gray-600"
              : "top-2 text-gray-600 text-xs"
          }`}
        >
          {label}
        </label>
        <input
          type={showPass && type === "password" ? "text" : type}
          name={name}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          className={`outline-none bg-[#fafafa] border ${error ? "border-red-500": "border-gray-300"} rounded-sm h-9 w-full px-2 text-xs focus:border-gray-400 transition-all duration-100`}
          {...props}
        />
        {type === "password" && showPasswordToggle && (
          <div
            className="absolute right-2 top-1 cursor-pointer"
            onClick={togglePassword}
          >
            {showPass ? (
              <span className="hover:text-gray-500 font-semibold text-sm">Hiden</span>
            ) : (
              <span className="hover:text-gray-500 font-semibold text-sm">Show</span>
            )}
          </div>
        )}
        {error && <span className="text-red-500 text-[10px]">{error}</span>}
      </div>
    );
  }
);

export default Input;