const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encoderUrl = encodeURI(direccion);
    let api_key = 'AIzaSyCXKxhJqpzog_Dhb_TL-dYYqYyU98xPAL8';

    //Espera a que esta petición regrese
    // los que sea que regrese lo metes dentro de resp
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoderUrl}&key=${api_key}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location['formatted_address'],
        lat: coors.lat,
        lng: coors.lng
    }

}


module.exports = {
    getLugarLatLng
}