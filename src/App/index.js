import React from "react";
import { AppUI } from "./AppUI";
// import logo from './logo.svg';
// import './App.css';

// const defaultTodos = [
//   {
//     text: "Cortar cebolla",
//     completed: false,
//   },
//   {
//     text: "Tomar el curso de intro a React",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: true,
//   },
// ];

function App() {

	const localStorageTodos = localStorage.getItem('TODOS_V1')
	let parsedTodos

	if (!localStorageTodos) {
		localStorage.setItem('TODOS_V1','[]')
		parsedTodos=[]
	} else {
		parsedTodos = JSON.parse(localStorageTodos)
	}


	const [todos,setTodos] = React.useState(parsedTodos)
	const [searchValue, setSearchValue] = React.useState('')

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

	const saveTodos = (newTodos)=>{
		const stringTodos=JSON.stringify(newTodos)
		localStorage.setItem('TODOS_V1',stringTodos)
		setTodos(newTodos)
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

  return (
    <AppUI 
		totalTodos={totalTodos} 
		completedTodos={completedTodos}
		searchValue={searchValue} 
		setSearchValue={setSearchValue}
		searchedTodo={searchedTodo}
		completeTodo={completeTodo}
		deleteTodo={deleteTodo}
		/>
  );
}

export default App;
