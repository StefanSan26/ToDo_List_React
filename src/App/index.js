import React from "react";
import { useTodos } from "./useTodos";
import TodoCounter from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import CreateTodoButton from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EditForm } from "../TodoForm/EditForm";
import './App.css'
import {EraseAllBtn} from "../EraseAllBtn"


function App() {
	const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
		edit,
		onEdit,
		setEdit,
		editValue,
		editTodo,
		completedTodos,
		totalTodos,
		addTodo,
		eraseAll,
		searchValue, 
		setSearchValue
  } = useTodos();
  return (
		<React.Fragment>

		<TodoCounter>
		<h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
		</TodoCounter>
		<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
		<TodoList 
			error={error}
			loading={loading}
			searchedTodos={searchedTodo}
			onError={()=><TodosError/>}
			onLoading={()=><TodosLoading/>}
			onEmptyTodos={()=><EmptyTodos/>}
			render={(todo) => (
				<TodoItem
					key={todo.text}
					text={todo.text}
					completed={todo.completed}
					onComplete={() => completeTodo(todo.text)}
					onDelete={() => deleteTodo(todo.text)}
					onEdit={()=>onEdit(todo.text)}
				/>
			)}
		/>
		{/* <TodoList>
			{error && <p class="App-text">Desesperate, hubo un erro</p>}
			{loading && <p class="App-text">Estamos cargando, no desesperes</p>}
			{!loading && !searchedTodo.length && <p class="loading App-text">¡Crea tu primer ToDo!</p>}
			{searchedTodo.map((todo) => (
				<TodoItem
					key={todo.text}
					text={todo.text}
					completed={todo.completed}
					onComplete={() => completeTodo(todo.text)}
					onDelete={() => deleteTodo(todo.text)}
					onEdit={()=>onEdit(todo.text)}
				/>
			))}
		</TodoList> */}
		{edit && (
			<Modal>
				<EditForm 
					setEdit={	setEdit}
					editValue={	editValue}
					editTodo={	editTodo}
				/>
			</Modal>
		)}
		{openModal && (
			<Modal>
				<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
			</Modal>
		)}
		<EraseAllBtn eraseAll={eraseAll}/>
		<CreateTodoButton
			// openModal={openModal}
			setOpenModal={setOpenModal}
			// onClick = {()=>setOpenModal(true)} // Como Yo lo habria hecho
		/>
	</React.Fragment>
  );
}

export default App;
