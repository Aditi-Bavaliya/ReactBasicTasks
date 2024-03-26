import React,{useState} from "react";
import "./SumOfTwoNumbers.css";

export default function SumOfTwoNumbers({isButtonEnabled}){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState('');
    const handleSum=()=>{
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (!isNaN(n1) && !isNaN(n2)) {
          setSum(n1 + n2);
        } else {
          setSum(null);
        }
      };
    
    return(
        <>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter First Number" className="input-field"/><br/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter Second Number" className="input-field"/><br/>
        <button onClick={handleSum} disabled={!isButtonEnabled}
        className={`sum-button ${!isButtonEnabled ? 'disabled' : ''}`}
        >Sum</button>
        {sum !== null && <p className="sum-result">Sum: {sum}</p>}
        </>
    );
}