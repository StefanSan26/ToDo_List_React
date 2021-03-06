import React from 'react';
import './TodoItem.css';
// import TodoContext from '../TodoContext'
import {FaCheck} from 'react-icons/fa'
import { MdModeEdit , MdOutlineDelete } from "react-icons/md";

function TodoItem(props) {
	// const Edit=()=>{
	// 	props.onEdit(prevState => !prevState)
	// 	// console.log('editando'+ props.edit)
	// }	


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
			onClick={props.onComplete}
			>
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
      </p>
			<span className="Icon Icon-edit"
			onClick={props.onEdit}
			>
				<MdModeEdit/>
			</span>
      <span className="Icon Icon-delete"
			onClick={props.onDelete}
			>
        <MdOutlineDelete/>
      </span>
			{/* {props.children} */}
    </li>
  );
}

export default TodoItem ;
