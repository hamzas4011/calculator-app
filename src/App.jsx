import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (val) => {
    if (val === 'Clear') {
      setValue('');
    } else if (val === 'Back') {
      setValue(value.slice(0, -1));
    } else if (val === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
    } else {
      setValue(value + val);
    }
  };

  const buttons = [
    ['Clear', 'Back', '.', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['0', '='],
  ];

  return (
    <div className="container">
      <div className="calculator" role="region" aria-label="Calculator">
        <div className="display" aria-live="polite">
          {value || '0'}
        </div>
        <div className="buttons">
          {buttons.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
              {row.map((btnValue) => (
                <button
                  key={btnValue}
                  className={`button ${
                    btnValue === 'Clear' ? 'clear' : btnValue === 'Back' ? 'back' : btnValue === '=' ? 'equal' : ''
                  }`}
                  onClick={() => handleButtonClick(btnValue)}
                  aria-label={btnValue}
                >
                  {btnValue}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
