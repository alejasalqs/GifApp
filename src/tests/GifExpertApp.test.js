const { shallow } = require("enzyme");
const { default: GiftExperApp } = require("../GifExpertApp");
import React from 'react';

describe('Pruebas en el archivo GifExpertApp.js', () => {
    
    const wrapper = shallow( <GiftExperApp />)
    
    test('Debe renderizarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
