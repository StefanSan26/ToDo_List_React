import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext=React.createContext()

function TodoProvider(props){
	const {
		item:todos,
		saveItem:saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1',[])

	const [searchValue,setSearchValue] = React.useState('')
	const [openModal,setOpenModal]= React.useState(false)

	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	let searchedTodo =[]

	if(searchValue<1){
		searchedTodo = todos
	}else{
		searchedTodo = todos.filter(todo=>{
			const todoText = todo.text.toLowerCase()
			const todoSearch = searchValue.toLowerCase()
			return todoText.includes(todoSearch)
		})
	}

	

	const addTodo = (text) =>{
		const newTodos = [...todos]
		newTodos.push({
			completed: false,
			text
		})
		saveTodos(newTodos)
	}

	const completeTodo = (text) =>{
		const todoIndex = todos.findIndex(todo => todo.text ===text)
		const newTodos = [...todos]
		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed= false
		}else {
		newTodos[todoIndex].completed = true
		}
		saveTodos(newTodos)
	}
	const deleteTodo = (text) =>{
		const todoIndex = todos.findIndex(todo => todo.text ===text)
		const newTodos = [...todos]
		newTodos.splice(todoIndex,1)
		saveTodos(newTodos)
	}
	return(
		<TodoContext.Provider value={{
			loading,
		error,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		searchedTodo,
		completeTodo,
		addTodo,
		deleteTodo,
		openModal,
		setOpenModal
		}}>
			{props.children}
		</TodoContext.Provider>
	)
}
export {TodoContext,TodoProvider}