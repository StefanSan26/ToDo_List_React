import React from 'react'

function WithStorageListener(WrappedComponent){
	return function WrappedComponentWithStorageListener(props){

		const [storageChange,setStorageChange]= React.useState(false)
		
		window.addEventListener('storage',(change)=>{
			if(change.key === 'TODOS_V1'){
				console.log('Hubo cambios en TODOS_v1')
				setStorageChange(true)
			}
		})

		const toggleShow=()=>{
			
			props.sincronize()
			setStorageChange(false)

		}

		return(
			<WrappedComponent
			show={storageChange}
			toggleShow={toggleShow}
			/>
		)
	}
}

export {WithStorageListener}