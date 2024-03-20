import React, { useEffect, useState } from 'react';
import ChildComponent from './childComponentEx.js';
 
function ParentComponent() {
  const [name, setName] = useState("");
  
  useEffect(() => {
    setName("Jebin Jacob");
  }, []);

  return (
    <div>
      <h1>This is the Parent Component {name}</h1>
      <ChildComponent name={name} />
    </div>
  );
}
 
export default ParentComponent;