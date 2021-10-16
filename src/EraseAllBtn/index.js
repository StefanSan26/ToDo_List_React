import React from "react";
import { TodoContext } from "../TodoContext";
import { MdOutlineDelete } from "react-icons/md";
import "./EraseAllBtn.css"

function EraseAllBtn(){
	const {eraseAll} = React.useContext(TodoContext)

	return(
		<button className="eraseAllBtn" 
		onClick={eraseAll}
		>
			<MdOutlineDelete/>
		</button>
	)
}

export {EraseAllBtn}