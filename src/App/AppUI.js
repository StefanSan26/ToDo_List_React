import React from "react";
import TodoCounter from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";

function AppUI({
	loading,
	error,
	totalTodos,
	completedTodos,
	searchValue, 
	setSearchValue,
	searchedTodo,
	completeTodo,
	deleteTodo
}) {
  return (
	
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
