import React from "react";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
// import logo from './logo.svg';
// import './App.css';

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar el curso de intro a React",
    completed: false,
  },
  {
    text: "Llorar con la llorona",
    completed: true,
  },
];

function App() {
	const [todos,setTodos] = React.useState(defaultTodos)
	const [searchValue, setSearchValue] = React.useState('')

	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	let searchedTodo =[]

	if(searchValue<1){
		searchedTodo = todos
	}else{
		searchedTodo = todos.filter(todo=>{
			const todoText = todo.text.toLowerCase()
			const todoSearch = searchValue.toLowerCase()
			return todoText.includes(todoSearch)
		})
	}

  return (
    <React.Fragment>
      <TodoCounter 
			total={totalTodos}
			completed={completedTodos}
			/>
      <TodoSearch 
			searchValue={searchValue}
			setSearchValue={setSearchValue} 
			/>
      <TodoList>
        {searchedTodo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
