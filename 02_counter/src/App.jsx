import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [varibale, function]
  let [counter, setCounter] = useState(0)

  //let counter = 10

  const addValue = () => {
    //console.log("Value added", Math.random()) // => for test purpose
    //console.log("Value added", counter) // => for test purpose

    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter = 0)
    }
  }

  return (
    <>
     <h1>Priyanka with React</h1>
     <h2>Counter value : {counter}</h2>

     <button 
     onClick={addValue}>
      Add Value</button>
     <button
     onClick={removeValue}
     >Remove Value</button>

      {/* updation in multiple places */}
     <p>Footer : {counter}</p>
    </>    
  )
}

export default App
