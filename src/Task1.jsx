import React, { useState } from "react";
import ArrayRecords from "./ArrayRecords";
import ShowHideElement from "./ShowHideElement";
import TwoWayDataBinding from "./TwoWayDataBinding";
import SumOfTwoNumbers from "./SumOfTwoNumbers";
import DynamicChild from "./DynamicChild";
import EnableDisableButton from "./EnableDisableButton";
import "./Task1.css";

export default function Task1() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const toggleButton = () => {
    setIsButtonEnabled(!isButtonEnabled);
  };

  return (
    <div className="App">
      <h1 className="task1heading">Task1</h1>
      <table className="task-table">
        <tbody>
          <tr>
            <td className="cell-padding">
              <div className="center-align">
                <EnableDisableButton isButtonEnabled={isButtonEnabled} toggleButton={toggleButton} />
              </div>
            </td>
            <td colSpan="2" className="cell-padding">
              <div className="center-align">
                <ShowHideElement isButtonEnabled={isButtonEnabled} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="cell-padding">
              <div className="center-align">
                <ArrayRecords />
              </div>
            </td>
            <td className="cell-padding">
              <div className="center-align">
                <DynamicChild isButtonEnabled={isButtonEnabled} />
              </div>
            </td>
          </tr>
          <tr> 
            <td colSpan="3" className="cell-padding">
              <TwoWayDataBinding />
            </td>      
          </tr>
          <tr>
            <td colSpan="3" className="cell-padding">
              <div className="sum-card">
                <SumOfTwoNumbers isButtonEnabled={isButtonEnabled} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
