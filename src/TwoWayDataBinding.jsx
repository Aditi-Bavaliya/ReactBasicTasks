import React,{useState} from "react";
import "./TwoWayDataBinding.css";

export default function TwoWayDataBinding(){
    const [value, setValue] = useState('');

    const handleChange = (event) =>{
        setValue(event.target.value);
    }
    return(
        <>
        <input type="text" value={value} onChange={handleChange} className="input-field"/>
        <p  className="entered-element">Entered Element is:{value} </p>
        </>
    );
}