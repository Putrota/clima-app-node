const axios = require('axios');


const getClima = async(lat, lng) => {

    const api_key = '2070216cf586dbc98b4519c5816519b9';
    const wheather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`;

    let resp = await axios.get(wheather_url);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}