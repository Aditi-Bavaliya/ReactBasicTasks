import React,{useState} from "react";
import "./ShowHideElement.css";

export default function ShowHideElement({isButtonEnabled}){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return(
        <div className="button-container">
        <button onClick={toggleVisibility} disabled={!isButtonEnabled}  className="show-hide-button">
        {isVisible ? 'Hide Element' : 'Show Element'}
      </button>
      {isVisible && <div className="show-hide-element">This element is now visible!</div>}
        </div>
    );
}