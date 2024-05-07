import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <div>
      {counter}
      <div />
      <button onClick={handleClick}>Increase!</button>
      <button onClick={decrement}>Decrease!</button>
    </div>
  );
}
