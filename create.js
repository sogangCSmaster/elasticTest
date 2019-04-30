const axios = require('axios');
const { api } = require('./config.json');

const elasticSearch = async() => {
    var API = api + "/mediaNews/articles/450000"
    axios.put(API)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => {
            console.warn(err);
            return err;
        })
    
}

response = elasticSearch();
console.log(response);