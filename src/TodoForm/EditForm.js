import React from 'react'
import './TodoForm.css'

function EditForm({
	setEdit,
	editValue,
	editTodo
} ){
	const [newTodoValue, setNewTodoValue] = React.useState('')


	const onCancel=()=>{
		// addTodo(editValue)
		setEdit(false)
	}
	const onSubmit=(event)=>{
		event.preventDefault()
		editTodo(newTodoValue || editValue)
		setEdit(false)
	}
	const onChange=(event)=>{
		setNewTodoValue(event.target.value)
	}

	return (
		<form onSubmit={onSubmit}>
			{/* <label>Escribe tu nuevo ToDo</label> */}
			<textarea
			value={newTodoValue || editValue}
			onChange={onChange}
			// placeholder="Cortar la cebolla para el almuerzo"
			>
			</textarea>	
			<div className="TodoForm-buttonContainer">
				<button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button--add">
					Editar
				</button>
			</div>
		</form>
	)
}

export {EditForm}