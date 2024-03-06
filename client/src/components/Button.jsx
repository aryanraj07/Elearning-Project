import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white font-semibold min-w-6 dark:bg-indigo-950 dark:text-white hover:bg-green-200 hover:text-black px-2 py-2 rounded-xl"
    >
      {text}
    </button>
  );
};

export default Button;
