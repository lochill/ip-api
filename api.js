const axios = require('axios')

module.exports = {
    getIp: function getUsername(ip) {
        var response = axios.get('http://demo.ip-api.com/json/' + ip + '?fields=66842623&lang=en').then((response) => {
            console.log(response);
        })
    }
}

