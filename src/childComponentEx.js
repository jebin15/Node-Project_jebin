import React from 'react';

const ChildComponent = ({ name }) => {
    return (
      <div>
        <h2>This is the Child Component</h2>
        <p>Hello child , {name}!</p>
      </div>
    );
  };

export default ChildComponent;
