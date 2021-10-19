import React from "react";
// import {TodoContext} from "../TodoContext"
import './TodoCounter.css'

function TodoCounter(props){
	return(
	<section>
		<h2 className={`TodoCounter ${props.loading && 'TodoCounter--loading'}`}
		>Has completado {props.completedTodos} de {props.totalTodos} ToDos</h2>
		{props.children}
		</section>
	);
}

export default TodoCounter 