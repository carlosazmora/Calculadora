import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Boton';
import BotonClear from './Componentes/BotonClear';
import Pantalla from './Componentes/Pantalla';

function App() {

  const [input, setInput] = useState("");

  const modificarInput = (valor) =>{
    setInput(input + valor);
  }

  const borrarInput = () =>{
    setInput("");
  }

  return (
    <div className="App">
      <h1>¡Hola, Mundo!</h1>
      <div className="Calculadora">
        <div className="Pantalla">
          <Pantalla input = {input}/>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>7</Boton>
          <Boton Clicked = {modificarInput}>8</Boton>
          <Boton Clicked = {modificarInput}> 9</Boton>
          <Boton Clicked = {modificarInput}>+</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>4</Boton>
          <Boton Clicked = {modificarInput}>5</Boton>
          <Boton Clicked = {modificarInput}>6</Boton>
          <Boton Clicked = {modificarInput}>-</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>1</Boton>
          <Boton Clicked = {modificarInput}>2</Boton>
          <Boton Clicked = {modificarInput}>3</Boton>
          <Boton Clicked = {modificarInput}>*</Boton>
        </div>
        <div className="Fila">
          <Boton Clicked = {modificarInput}>0</Boton>
          <Boton Clicked = {modificarInput}>.</Boton>
          <Boton Clicked = {modificarInput}>=</Boton>
          <Boton Clicked = {modificarInput}>/</Boton>
        </div>
        <div className="Fila">
          <BotonClear Clicked = {borrarInput}>AC</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
