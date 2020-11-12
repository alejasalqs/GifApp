import React from 'react';
import { shallow } from 'enzyme';
import { GiftGridItem } from '../../components/GiftGridItem'; 

describe('Pruebas en el componente GifGridItem', () => {

    const title = 'Hello test';

    const url = 'https://localhost/test.jpg';

    const wrapper = shallow( <GiftGridItem title={title} url={url}/> );

    test('Debe mostrar el componente correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe mostrar un parrafo con el title ', () => {
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe(title);
    })
    
    test('Debe de tener la imagen igual al los props y el alt igual al title ', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);

        expect(img.prop('alt')).toBe(title);
    })
    
    test('Debe tener la clase fadeIn ', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('fadeIn')).toBe(true);
    })
    
})
