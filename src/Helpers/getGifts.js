
export const getGifts = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=4JMhqrDhPofDDDQv1VAT2W0N3OPxC29v`;
    const resp = await fetch( URL );
    const { data } = await resp.json();

    // Se filtran los datos que se necesitan para mostrar
    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }        
    })

    //console.log(gifts);
    return gifts;
}
