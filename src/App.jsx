import { useState } from 'react';
import './Miapp.css';

const App = () =>
  {
    const [contador, setContador] = useState(0) //[Valor, Funcion que modifica valor] = (Valor por defecto)
    return (
      <>
        <h1>Hola mundo</h1>
        <p>Osvaldo Gonzalez</p>
        <h2>Contador: {contador}</h2>
        <button id="btn_incrementa" className="btns" onClick={ () => setContador(contador+1)} >Incrementa</button>
        <button id="btn_Decrementa" className='btns' onClick={ () => setContador(contador-1)}>Decrementa</button>
        <button id="btn_Reinicia" className='btns' onClick={ () => setContador(0)}>Reinicia</button>
      </>    
    )     
  }

export default App;