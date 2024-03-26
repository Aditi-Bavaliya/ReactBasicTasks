import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './ParentComponent.css';

const ParentComponent = ({isButtonEnabled}) => {
  const [children, setChildren] = useState([]);

  const addChild = () => {
    setChildren([...children, { id: children.length + 1 }]);
  };

  const removeChild = (idToRemove) => {
    setChildren(children.filter(child => child.id !== idToRemove));
  };

  return (
    <div className="parent-container">
      <button onClick={addChild} disabled={!isButtonEnabled} className="add-child-button" >Add Child</button>
      {children.map(child => (
        <ChildComponent key={child.id} id={child.id} removeChild={removeChild} className="child-component"/>
      ))}
    </div>
  );
};

export default ParentComponent;

