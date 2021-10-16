import React from "react";
import TodoCounter from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EditForm } from "../TodoForm/EditForm";
import './App.css'
import {EraseAllBtn} from "../EraseAllBtn"

function AppUI() {
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
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
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
      </TodoList>
			{edit && (
				<Modal>
					<EditForm />
				</Modal>
			)}
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
			<EraseAllBtn/>
      <CreateTodoButton
        // openModal={openModal}
        setOpenModal={setOpenModal}
        // onClick = {()=>setOpenModal(true)} // Como Yo lo habria hecho
      />
    </React.Fragment>
  );
}

export { AppUI };
