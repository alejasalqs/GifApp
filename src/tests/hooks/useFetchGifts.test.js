const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifts } = require("../../hooks/useFetchGifts");

describe('Pruebas en el archivo useFetchGifts.js', () => {
    test('Debe de retornar el estado inicial ', async () => {

        // Utilizando la libreria testing-library/react-hooks

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('Pokemon'));

        const {data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toBe([]);
        expect( loading ).toBe(true);
    });


    test('Debe retornar gifs y el loading en false ', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts('Pokemon'));

        await waitForNextUpdate();

        const {data, loading } = result.current;

        expect( data.length ).toBe(20);
        expect( loading ).toBe(false);
    });
    
    
})
