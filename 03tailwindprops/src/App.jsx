import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "yash",
    age: 23
  }
  let newArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="yash" btnText="viit me"/>
        </>
  )
}

export default App;
