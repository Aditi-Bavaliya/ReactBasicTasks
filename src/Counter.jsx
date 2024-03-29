import React, {useState} from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count+1);
  };

  const handleDecrease = () => {
      setCount(count - 1);
  };
  return (
    <>
    <h1>React Counter App</h1>
    <div className="container">
      <h1 className='num'>{count}</h1>
      <p>
        <button className='btnClick' onClick={handleIncrease}>Increase</button>
        <button className='btnClick' onClick={handleDecrease}>Decrease</button>
      </p>
    </div>
    </>
  );
}
