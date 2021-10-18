import React from "react";
// import {TodoContext} from "../TodoContext"
import './TodoCounter.css'

function TodoCounter(props){
	// const {totalTodos, completedTodos} = React.useContext(TodoContext)
	return(
		// <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
		<section>
		{props.children}
		</section>
	);
}

export default TodoCounter 