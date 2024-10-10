import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const toggleColor = () => {
    switch (color) {
      case 'red':
        setColor('green');
        break;
      case 'green':
        setColor('yellow');
        break;
      case 'yellow':
        setColor('red');
        break;
      default:
        setColor('red');
    }
  };

  const addPurple = () => {
    if (color !== 'purple') {
      setColor('purple');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <div style={{ backgroundColor: 'black', padding: '10px', borderRadius: '20px' }}>
        <div
          onClick={() => handleClick('red')}
          style={{
            backgroundColor: color === 'red' ? 'red' : 'gray',
            height: '100px',
            width: '100px',
            margin: '10px auto',
            borderRadius: '50%',
            boxShadow: color === 'red' ? '0 0 20px 5px red' : 'none', // Añade el efecto de "brillo"
          }}
        />
        <div
          onClick={() => handleClick('yellow')}
          style={{
            backgroundColor: color === 'yellow' ? 'yellow' : 'gray',
            height: '100px',
            width: '100px',
            margin: '10px auto',
            borderRadius: '50%',
            boxShadow: color === 'yellow' ? '0 0 20px 5px yellow' : 'none', // Añade el efecto de "brillo"
          }}
        />
        <div
          onClick={() => handleClick('green')}
          style={{
            backgroundColor: color === 'green' ? 'green' : 'gray',
            height: '100px',
            width: '100px',
            margin: '10px auto',
            borderRadius: '50%',
            boxShadow: color === 'green' ? '0 0 20px 5px green' : 'none', // Añade el efecto de "brillo"
          }}
        />
        {color === 'purple' && (
          <div
            style={{
              backgroundColor: 'purple',
              height: '100px',
              width: '100px',
              margin: '10px auto',
              borderRadius: '50%',
              boxShadow: '0 0 20px 5px purple',
            }}
          />
        )}
      </div>
      <button onClick={toggleColor} style={{ marginTop: '20px' }}>Alternar Color</button>
      <button onClick={addPurple} style={{ marginTop: '10px' }}>Agregar Púrpura</button>
    </div>
  );
};

export default TrafficLight;



