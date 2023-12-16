import './App.css';
import Boton from './Componentes/Boton';

function App() {
  return (
    <div className="App">
      <h1>¡Hola, Mundo!</h1>
      <div className="Calculadora">
        <div className="Fila">
          <Boton></Boton>
        </div>
        <div className="Fila"></div>
        <div className="Fila"></div>
        <div className="Fila"></div>
        <div className="Fila"></div>
      </div>
    </div>
  );
}

export default App;
