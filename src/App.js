import React from 'react';
import './App.css';
import Logo from './components/logo.jsx';
import Button from './components/button.jsx';
import Screen from './components/screen.jsx';
import ClearButton from './components/clear-button.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  
  const [input, setInput] = useState("");

  const putInput = (value) => {           {/*le agrega un valor a input*/}
    setInput(input + value);
  };

  const resetInput = () => {
    setInput("");
  };
  
  const equals = () => {
    if (input !== "") {
      try {
        const result = evaluate(input).toString(); // Evalúa y convierte a string
        setInput(result.length > 12? result.slice(0, 12) : result); // Limita a 12 caracteres
      } catch (error) {
        setInput("Syntax error"); // Si hay un error, muestra "Error"
      }
    } else {
      alert("Enter a valid input");
    }
  };


  

  return (

    <div className='App'>
      <Logo/>
      <div className='calculator-container'>
        <Screen 
        input={input} />
        <div className='fila'>
          <Button handleClick={putInput}>1</Button>
          <Button handleClick={putInput}>2</Button>
          <Button handleClick={putInput}>3</Button>
          <Button handleClick={putInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={putInput}>4</Button>
          <Button handleClick={putInput}>5</Button>
          <Button handleClick={putInput}>6</Button>
          <Button handleClick={putInput}>/</Button>
        </div>
        <div className='fila'>
          <Button handleClick={putInput}>7</Button>
          <Button handleClick={putInput}>8</Button>
          <Button handleClick={putInput}>9</Button>
          <Button handleClick={putInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={equals}>=</Button>
          <Button handleClick={putInput}>0</Button>
          <Button handleClick={putInput}>.</Button>
          <Button handleClick={putInput}>-</Button>
        </div>
        <div className='fila'>
          <ClearButton resetInput={resetInput}>AC</ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App;