import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItem } from '../@types/todo';

type TodosContexData = {
  handleAddNewTodo: (todo: TodoItem) => Promise<void>
  todos: TodoItem[]
}

type TodosProviderProps = {
  children?: ReactNode
}

const TODOS = "@todo:list:todos"

export const TodosContext = createContext({} as TodosContexData)

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  console.log(todos)

  const loadUserStoredData = async () => {
    // setIsloading(true)

    const storedData = await AsyncStorage.getItem(TODOS)

    if (storedData) {
      const todoData = JSON.parse(storedData) as TodoItem[]
      console.log(storedData)
      setTodos(todoData)
    }

    // setIsloading(false)
  }

  const handleAddNewTodo = async (todo: TodoItem) => {
    const todolist = [...todos, todo]
    await AsyncStorage.setItem(TODOS, JSON.stringify(todolist))
    setTodos(prev => [...prev, todo])
  }

  useEffect(() => {
    loadUserStoredData()
  }, [])

  return (
    <TodosContext.Provider value={{
      handleAddNewTodo,
      todos,
    }}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodosContext)

  return context;
}
