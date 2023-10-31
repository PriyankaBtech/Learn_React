import { useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  // Function of add value in Todo Array
  const addTodo = (content) => {
    setTodos((prevContent) => [{id: Date.now(), ...content}, ...prevContent])
  }
  
  // Function of update value in Todo Array
  const updateTodo = (id, content) => {
    setTodos((prev) => prev.map((prevContent) => (prevContent.id === id ? content : prevContent)))
  }
  
  // Function of delete value in Todo Array
  const deleteTodo = (id) => {
    setTodos((Content) =>  Content.filter((prevContent) => prevContent.id !== id))
  }
  
  // Function to handle checkbox in Todo Array
  const toggleCheck = (id) => {
    setTodos((content) => content.map((prevContent) => prevContent === id ? {...prevContent, toggleCheck: !prevContent.toggleCheck} : prevContent ))
  }

  return (
    <TodoProvider value={{addTodo, updateTodo, deleteTodo, toggleCheck}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App