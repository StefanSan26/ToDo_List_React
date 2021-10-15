import React from 'react'


function useLocalStorage(itemName,initialValue){
	const [error, setError] = React.useState(false)
	const [loading, setLoading] = React.useState(true)
	const [item, setItem] = React.useState(initialValue)

	React.useEffect(()=>{
		setTimeout(()=>{
			try{
				const localStorageItem = localStorage.getItem(itemName)
			let parsedItem
		
			if (!localStorageItem) {
				localStorage.setItem(itemName,JSON.stringify(initialValue))
				parsedItem=initialValue
			} else {
				parsedItem = JSON.parse(localStorageItem)
			}

			setItem(parsedItem)
			setLoading(false)
			}catch(error){
				setError(error)
			}
		},1000)
	},[]) //Esto hace que solamente se ejecute una vez.En caso que no enviemos nada se renderiza cada vez que haya un cambi minimo. si enviamo algun argumento el effect va a estar mirando los cambios de este argumento



	const saveItem = (newItem)=>{
		try{
			const stringItem=JSON.stringify(newItem)
		localStorage.setItem(itemName,stringItem)
		setItem(newItem)
		}catch(error){
			setError(error)
		}
	}
	return{
		item,
		saveItem,
		loading,
		error
	}
}

export {useLocalStorage}