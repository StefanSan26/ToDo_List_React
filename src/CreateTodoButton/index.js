import React from "react";
import './CreateTodoButton.css'




function CreateTodoButton(props) {
	const onClickButton = (msg)=>{
		alert(msg)
	}
	return(
		<button 
		className='CreateTodoButton'type="button"
		onClick={()=>onClickButton('Aqui se debería abrir el modal')}
		>
			+
		</button>
	)
}

export default CreateTodoButton