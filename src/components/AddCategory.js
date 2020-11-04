import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // Estado inicial

    // Esta función se ejcuta cuando escribimos
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    // esta función se ejcuta al presionar enter en el input
    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamamos la referencia de la funcion que esta en el otro componente
        if(inputValue.trim().length >= 2) {
           setCategories(categories => [inputValue]);
           setInputValue('');
        } else {
            alert('This is not a valid search');
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )
}

// Props obligatorios
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}