import React from "react";
import './CreateTodoButton.css'
// import {TodoContext} from "../TodoContext";



// const {	openModal,	setOpenModal} = React.useContext(TodoContext)  //Usando el Usecontext directamente


function CreateTodoButton(props) {
	const onClickButton = ()=>{
		// !props.openModal?props.setOpenModal(true):props.setOpenModal(false)
	props.setOpenModal(prevState => !prevState)
	}
	return(
		<button 
		className='CreateTodoButton'type="button"
		onClick={onClickButton}
		>
			+
		</button>
	)
}

export default CreateTodoButton