const { getGifts } = require("../../Helpers/getGifts")

describe('Pruebas en el archivo getGifts.js ', () => {
    test('Debe de traer 20 elementos ', async () => {

        const gifs = await getGifts('pokemon');

        expect( gifs.length ).toBe(20);
    })
    
    test('NO debe retornar datos si NO se envía un argumento ', async () => {
        
        const gifs = await getGifts('');

        expect( gifs.length ).toBe(0);

    })

})
