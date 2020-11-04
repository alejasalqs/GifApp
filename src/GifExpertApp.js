import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExperApp = () => {

    const [categories, setCategories] = useState(['Pokemon']); // Estado inicial

    //const handleAdd = () => {
        // SetCategories le cae encima al estado anterior
        // Por eso es necesario mantener el anterior y agregar lo nuevo
        //setCategories([...categories, 'Nueva serie']);
    //}

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <br />
            <ol>
                {
                    categories.map(category => (
                        <GiftGrid
                        key={category} 
                        category={category} />
                    ))
                }
            </ol>
        </>
    );
}

export default GiftExperApp;