import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");  
  const [result, setResult] = useState(null); 

  
  const handleClick = (value) => {
    setInput(input + value);
  };

  
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  
  const handleEvaluate = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult("Oops!");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input
            type="text"
            value={input}
            readOnly
            placeholder="0"
          />
          {result !== null && <div className="result">{result}</div>}
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("1")} className="button">1</button>
          <button onClick={() => handleClick("2")} className="button">2</button>
          <button onClick={() => handleClick("3")} className="button">3</button>
          <button onClick={() => handleClick("+")} className="button operator">+</button>

          <button onClick={() => handleClick("4")} className="button">4</button>
          <button onClick={() => handleClick("5")} className="button">5</button>
          <button onClick={() => handleClick("6")} className="button">6</button>
          <button onClick={() => handleClick("-")} className="button operator">-</button>

          <button onClick={() => handleClick("7")} className="button">7</button>
          <button onClick={() => handleClick("8")} className="button">8</button>
          <button onClick={() => handleClick("9")} className="button">9</button>
          <button onClick={() => handleClick("*")} className="button operator">x</button>

          <button onClick={() => handleClick("0")} className="button">0</button>
          <button onClick={handleClear} className="button clear">C</button>
          <button onClick={() => handleClick("/")} className="button operator">/</button>
          <button onClick={handleEvaluate} className="button equals">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
