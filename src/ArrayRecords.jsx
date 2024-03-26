import React from "react";
import "./ArrayRecords.css";

export default function ArrayRecords(){
    const array = [ 
    { name: "Rose", family: "Rosaceae" },
    { name: "Tulip", family: "Liliaceae" },
    { name: "Sunflower", family: "Asteraceae" },
    { name: "Daisy", family: "Asteraceae" },
    { name: "Lily", family: "Liliaceae" }]
    return(
        <div className="array-records">
            <h2>List of Flower and its Family</h2>
            <ul>
                {array.map((flower, index) =>(
                    <li key={index}>{flower.name} - {flower.family}</li>
                ))}
            </ul>
        </div>
    );
}