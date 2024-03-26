import React from 'react';

const ChildComponent = ({ id, removeChild }) => {
  return (
    <div>
      Child Component {id}
      <button onClick={() => removeChild(id)}>Remove</button>
    </div>
  );
};

export default ChildComponent;
