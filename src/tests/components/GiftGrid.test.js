const { shallow } = require("enzyme");
import '@testing-library/jest-dom';
const { GiftGrid } = require("../../components/GiftGrid");
import React from 'react';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');

describe('Pruebas en el archivo GiftGrid.js', () => {
    
    const category = 'Pokemon'

    test('El componenete debe renderizarse correctamente ', () => {

        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GiftGrid category={category}/>)
    
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes ', () => {
        // mock => fingir algo

        const fakeGifs = {
            id: 'ABC', 
            title: 'TEST',
            url: 'https://test.jpg',
        }

        useFetchGifts.mockReturnValue({
            data: [fakeGifs],
            loading: false
        });
        
        const wrapper = shallow( <GiftGrid category={category}/>)
        
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GiftGridItem').length ).toBe( fakeGifs.length );

    });
    
})
