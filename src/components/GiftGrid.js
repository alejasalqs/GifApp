import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftGridItem } from './GiftGridItem';
import PropTypes from 'prop-types';

export const GiftGrid = ({ category }) => {

    // La lógica para obtener las imagenes esta en este custom hook
    // Se renombra la varibale data por gifts
    const { data:gifts, loading } = useFetchGifts(category);

    return (
        <>
            { loading && <h1>Loading...</h1>}
            <h3>Searching: {category}</h3>
            <div className="card-grid">
                {
                    gifts.map(gift => (
                        <GiftGridItem 
                        key={gift.id} 
                        {...gift} />))
                }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}