import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="button-container">
        <div>
          <button onClick={() => setCount(count + 1)}>Increment </button>
        </div>
        <div>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

      </div>
    </>
  )
};

export default App;
