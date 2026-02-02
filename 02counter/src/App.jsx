import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0)

      //let counter = 5
const addValue = () => {

  if (counter >=20) return(
    alert("Counter cannot exceed 20")
  );
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)

    console.log("Button clicked", counter)

}

const removeValue = () => {
  if (counter <= 0 ) return(
    alert("Counter cannot go below 0")
  );


  setCounter(counter-1)
      console.log("Button clicked", counter)

}

  return (
    <>
     <h1>Button</h1>
     <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value </button>
    <br /> 
    <button
    onClick={removeValue}>Remove value </button>

    </>
  )
}
export default App;
