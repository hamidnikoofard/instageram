import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 border-t-blue-800 h-12 w-12 animate-spin"></div>
    </div>
  );
};

export default Loading;

