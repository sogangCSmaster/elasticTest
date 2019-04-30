const axios = require('axios');
const { api } = require('./config.json');


var API = api + "/news/articles/_count"
axios.get(API)
    .then((response) => {
        console.warn(response.data);
    })