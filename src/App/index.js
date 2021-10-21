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
import { EmptySearch } from "../EmptySearch";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlertWhitStorageListener } from "../ChangeAlert";


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
		setSearchValue,
		sincronizeTodos
  } = useTodos();
  return (
		<React.Fragment>
		<TodoHeader loading={loading} >
			<TodoCounter
			// loading={loading}
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			/>
			<TodoSearch 
			// loading={loading}
			searchValue={searchValue} 
			setSearchValue={setSearchValue}/>
		</TodoHeader>
		<TodoList 
			error={error}
			loading={loading}
			searchedTodos={searchedTodo}
			totalTodos={totalTodos}
			searchText={searchValue}
			onError={()=><TodosError/>}
			onLoading={()=><TodosLoading/>}
			onEmptyTodos={()=><EmptyTodos/>}
			onEmptySearchResults={(searchText)=><EmptySearch searchText={searchText}/>}
			// render={(todo) => (
			// 	<TodoItem
			// 		key={todo.text}
			// 		text={todo.text}
			// 		completed={todo.completed}
			// 		onComplete={() => completeTodo(todo.text)}
			// 		onDelete={() => deleteTodo(todo.text)}
			// 		onEdit={()=>onEdit(todo.text)}
			// 	/>
			// )}
		>
			{(todo) => (
				<TodoItem
					key={todo.text}
					text={todo.text}
					completed={todo.completed}
					onComplete={() => completeTodo(todo.text)}
					onDelete={() => deleteTodo(todo.text)}
					onEdit={()=>onEdit(todo.text)}
				/>
			)}
		</TodoList>
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
			setOpenModal={setOpenModal}
		/>
		<ChangeAlertWhitStorageListener
		sincronize={sincronizeTodos}
		/>
	</React.Fragment>
  );
}

export default App;
