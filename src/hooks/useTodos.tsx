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
  handleDeleteTodo: (id: string) => Promise<void>
  handleMarkAsCompleted: (id: string) => Promise<void>
}

type TodosProviderProps = {
  children?: ReactNode
}

const TODOS = "@todo:list:todos"

export const TodosContext = createContext({} as TodosContexData)

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const loadUserStoredData = async () => {
    const storedData = await AsyncStorage.getItem(TODOS)
    if (storedData) {
      const todoData = JSON.parse(storedData) as TodoItem[]
      setTodos(todoData)
    }
  }

  const handleAddNewTodo = async (todo: TodoItem) => {
    const todolist = [...todos, todo]
    await AsyncStorage.setItem(TODOS, JSON.stringify(todolist))
    setTodos(prev => [...prev, todo])
  }

  const handleDeleteTodo = async (id: string) => {
    const arrayWithDeletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(arrayWithDeletedTodo)
    await AsyncStorage.setItem(TODOS, JSON.stringify(arrayWithDeletedTodo))
  }

  const handleMarkAsCompleted = async (id: string) => {
    const arrayWithChangedTodo = todos.map(
      todo => todo.id === id
        ? { ...todo, isDone: todo.isDone ? false : true }
        : todo
    )
    setTodos(arrayWithChangedTodo)
    await AsyncStorage.setItem(TODOS, JSON.stringify(arrayWithChangedTodo))
  }

  useEffect(() => {
    loadUserStoredData()
  }, [])

  return (
    <TodosContext.Provider value={{
      handleAddNewTodo,
      todos,
      handleDeleteTodo,
      handleMarkAsCompleted
    }}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodosContext)

  return context;
}
