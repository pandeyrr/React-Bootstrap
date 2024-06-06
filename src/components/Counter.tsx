import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="pt-4 pb-4">
      {/* show the counter */}
      <h1>Counter: {count}</h1>
      {/* counter increment */}
      <button
        className="btn btn-success m-2"
        onClick={() => setCount(count + 1)} /*  */
      >
        Increment
      </button>
      {/* counter decrement */}
      <button
        className="btn btn-danger m-2"
        onClick={() => setCount(count - 1)} /* counter decrement */
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
