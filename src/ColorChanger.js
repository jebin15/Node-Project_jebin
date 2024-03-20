import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
    const [color, setColor] = useState('black');
    const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      // Change color to red when button is clicked
      setColor('red');
    } else {
      // Reset color to black when button is not clicked
      setColor('blue');
    }
  }, [buttonClicked]); // Run the effect whenever 'buttonClicked' state changes

  const handleClick = () => {
    // Toggle button click state
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Change Color to Red</button>
      <p style={{ color }}>This text will change color.</p>
    </div>
  );
};

export default ColorChanger;