const axios = require('axios');
const { api } = require('./config.json');


var API = api + "/news/articles/_search"
axios.post(API, {
    query: {
        multi_match: {
            query: "통일부",
            fields: ["title", "content"]
        }
    }
})
.then((response) => {
    // console.log(response);
    var hits = response.data.hits.hits;
    console.log(hits);
})
.catch((err) => {
    throw(err);
})