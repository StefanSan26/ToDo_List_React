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

function useLocalStorage(itemName,initialValue){
	const [error, setError] = React.useState(false)
	const [loading, setLoading] = React.useState(true)
	const [item, setItem] = React.useState(initialValue)

	React.useEffect(()=>{
		setTimeout(()=>{
			try{
				const localStorageItem = localStorage.getItem(itemName)
			let parsedItem
		
			if (!localStorageItem) {
				localStorage.setItem(itemName,JSON.stringify(initialValue))
				parsedItem=initialValue
			} else {
				parsedItem = JSON.parse(localStorageItem)
			}

			setItem(parsedItem)
			setLoading(false)
			}catch(error){
				setError(error)
			}
		},1000)
	})



	const saveItem = (newItem)=>{
		try{
			const stringItem=JSON.stringify(newItem)
		localStorage.setItem(itemName,stringItem)
		setItem(newItem)
		}catch(error){
			setError(error)
		}
	}
	return{
		item,
		saveItem,
		loading,
		error
	}
}

function App() {
	const {
		item:todos,
		saveItem:saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1',[])

	const [searchValue,setSearchValue] = React.useState('')

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
	// console.log('Render antes del UseEffect')
	
	// React.useEffect(()=>{
	// 	console.log('use Effect')
	// },[])


	// console.log('Render despues del UseEffect')


  return (
    <AppUI 
		loading={loading}
		error={error}
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
