import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let details = {
    username: 'priyanka',
    age: 23,
    place: 'delhi'
  }

  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-green-400 text-black text-3xl font-bold p-5 rounded-xl mb-4">
      Test Tailwind
      </h1>
      <Card username="one" btnText="Click me"/>
      <Card username="two" btnText="Visit me"/>
    </>
  )
}

export default App
