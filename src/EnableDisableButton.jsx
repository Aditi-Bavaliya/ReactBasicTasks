import React from "react";
import "./EnableDisableButton.css";

export default function EnableDisableButton({isButtonEnabled, toggleButton}){
    return(
        <>
         <button onClick={toggleButton} className={`enable-disable-button ${isButtonEnabled ? '' : 'disabled'}`}>
        {isButtonEnabled ? 'Disable' : 'Enable'}
        </button><br/>
        <p className="button-text">{isButtonEnabled ? 'Button is enabled' : 'Button is disabled'}</p>

        </>
    );
}