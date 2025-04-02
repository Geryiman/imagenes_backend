const axios = require('axios');

class Client{
    constructor(){
        this.client= axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers:{
                'Authorization': 'Bearer 9kOa5eRGcY_X7BkJw3O97RapEx1C4WAB0n1BOv9E'
            }
        })
    }
}
module.exports = Client;