import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'


function TodoSearch() {
 const {searchValue, setSearchValue} = React.useContext(TodoContext)

	const onSearchValueChange=(event)=>{
		// console.log(event.target.value)
		setSearchValue(event.target.value)
	}
	return[
		<input className='TodoSearch' 
		type="text" 
		placeholder='Buscar tarea'
		value={searchValue}
		key="{searchValue}"
		onChange={onSearchValueChange}
		/>
		]
}

export default TodoSearch