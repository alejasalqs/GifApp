import { useState, useEffect } from 'react';
import { getGifts } from '../Helpers/getGifts';

export const useFetchGifts = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

      // Los efectos no pueden ser async
      // Nos ayuda a ejecutar código de manera condicional
      useEffect(() => {
        // Primer argumento, funcion que vamos a ejecutar
        getGifts(category).then(gifts => setState({
            data: gifts,
            loading: false
        }));
    }, 
    // Segundo argumento, Si se envía vacío solo se ejecuta la primera vez que se renderiza el componente
    // Si se añade algo al arreglo significa que se ejecuta si la condicion se cumple
    [category]);
    
    return state;
}