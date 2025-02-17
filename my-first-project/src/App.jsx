import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState(["", ""]);
  const [result, setResult] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleCalculate = (operator) => {
    const numbers = inputs.map((num) => parseFloat(num));
    
    if (numbers.some(isNaN)) {
      setResult("Enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = numbers.reduce((acc, num) => acc + num, 0);
        break;
      case "-":
        res = numbers.reduce((acc, num) => acc - num);
        break;
      case "*":
        res = numbers.reduce((acc, num) => acc * num, 1);
        break;
      case "/":
        res = numbers.reduce((acc, num) => (num !== 0 ? acc / num : "Cannot divide by zero"));
        break;
      default:
        res = "Invalid Operation";
    }
    setResult(res);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  return (
    <div className="container">
      {/* Left Section: Counter above, Calculator below */}
      <div className="left-section">
        <div className="card">
          <h2>Counter</h2>
          <h1>{count}</h1>
          <div className="button-group">
            <button className="increment" onClick={handleIncrement}>
              Increment
            </button>
            <button className="decrement" onClick={handleDecrement}>
              Decrement
            </button>
          </div>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="card calculator-card">
          <h2>Basic Calculator</h2>
          
          {/* Add New Input Button */}
          <button className="add-input" onClick={addInputField}>Add New Input</button>

          {/* Input Fields */}
          {inputs.map((value, index) => (
            <input
              key={index}
              type="number"
              className="input-field"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="0"
            />
          ))}

          {/* Operator Buttons */}
          <div className="operator-group">
            <button className="operator" onClick={() => handleCalculate("+")}>+</button>
            <button className="operator" onClick={() => handleCalculate("-")}>-</button>
            <button className="operator" onClick={() => handleCalculate("*")}>*</button>
            <button className="operator" onClick={() => handleCalculate("/")}>/</button>
          </div>

          {/* Result Box */}
          <div className="result-box">
            Result: {result !== null ? result : "N/A"}
          </div>
        </div>
      </div>

      {/* Right Section: Empty (Todolist removed) */}
      <div className="right-section">
        {/* You can add other components here if needed */}
      </div>
    </div>
  );
}

export default App;