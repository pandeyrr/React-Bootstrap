import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="py-4">
      {/* show the counter */}
      <h2 className="py-4">Counter</h2>
      {/* counter increment */}
      <h4 className="py-4">You clicked: {count} times</h4>

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
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
