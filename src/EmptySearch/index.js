import React from "react";

function EmptySearch({searchText}) {
	return(
		<div>
			<p>
			No hay resultado para {searchText} 
			</p>
		</div>
	)
}

export {EmptySearch}