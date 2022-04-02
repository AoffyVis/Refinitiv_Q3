const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://codequiz.azurewebsites.net/';

const getNAV = async () => {
    const {data} = await axios.get(URL);
    const $ = cheerio.load(data);
    //console.log(data);

    const result = Array.from($('body')).map(elem => {
        title: $(elem).find('h1').last().text()
    })
    console.log(result);
}

getNAV();