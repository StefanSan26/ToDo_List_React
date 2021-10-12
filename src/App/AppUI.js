import React from "react";
import TodoCounter from "../TodoCounter";
import {TodoContext} from "../TodoContext";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";

function AppUI() {
	const {
		error, 
		loading, 
		searchedTodo,
		completeTodo,
		deleteTodo
	} = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
				<TodoList>
			{error && <p>Desesperate, hubo un erro</p>}
			{loading && <p>Estamos cargando, no desesperes</p>}
			{(!loading && !searchedTodo.length) && <p>¡Crea tu primer ToDo!</p>}
        {searchedTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
