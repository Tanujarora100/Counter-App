import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl ">
        Increment and Decrement Counter
      </div>
      <div className="flex gap-10 border-4 p-3 bg-white rounded-md w-44">
      <div className="font-medium text-3xl text-center">
        <button onClick={() => setCount(count + 1)} className>+ </button>
      </div>
      <label className="font-medium text-3xl text-center " typeof="text">
        {count}
      </label>
      <div >
        <button className="font-medium text-3xl text-center" onClick={() => setCount(count - 1)}>-</button>
      </div>
   
      </div>
      <div>
        <button className="font-medium text-xl bg-blue-400 rounded-sm px-5 py-2 w-24 text-white" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
