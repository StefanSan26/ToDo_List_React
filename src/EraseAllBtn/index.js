import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import "./EraseAllBtn.css"

function EraseAllBtn({eraseAll}){

	return(
		<button className="eraseAllBtn" 
		onClick={eraseAll}
		>
			<MdOutlineDelete/>
		</button>
	)
}

export {EraseAllBtn}