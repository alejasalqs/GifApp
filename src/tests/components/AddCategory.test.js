import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en el archivo AddCategory.js', () => {
    
    const setCategory = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategory}/>)

    beforeEach( () => {
        // AAcciones que se deben de hacer antes de ejecutar cada una de las pruebas
        jest.clearAllMocks(); // Esta funcion limpia todas las simulaciones que se hagan
        wrapper = shallow(<AddCategory setCategories={setCategory}/>)
    });
    
    test('Debe mostar correctamente el componente <AddCategory /> ', () => {
        expect(wrapper).toMatchSnapshot();
    })
      
    test('Debe de cambiar la caja de txto ', () => {

        const input = wrapper.find('input'); // Como solo hay un input esta bien esta forma

        const value = 'Hola Mundo Test';

        // Así se simula el cambio del input
        // El segundo parametro es la informacion para enviar al metodo y que no reviente
        input.simulate('change', { target: { value } });

    })

    test('NO debe de post la información ', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategory ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo Test';

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategory ).toHaveBeenCalled();
        
        expect( input.prop('value') ).toBe('');
    });
    
    
})
