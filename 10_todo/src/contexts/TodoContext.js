import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "content",
            check: false
        }
    ],
    addTodo: (content) => {},
    updateTodo: (id, content) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider