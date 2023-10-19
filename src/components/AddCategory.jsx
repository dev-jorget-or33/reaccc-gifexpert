import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState("")
    
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const finalInputValue = inputValue.trim();
        if(finalInputValue.length <= 0) return;
        // setCategories( categories => [ inputValue, ...categories ])
        onNewCategory( finalInputValue )
        setInputValue("")
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs..."
            value={ inputValue }
            onChange={ onInputChange }
            />
    </form>
  )
}
