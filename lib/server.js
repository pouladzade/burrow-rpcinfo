let request = require('request');
module.exports = class server {

    constructor(rpcUrl) {
        this.url = rpcUrl;
    }

    serverPost(method_Name, params, cb) {
        try {
            var jsonRandomID = generateJSONID();
            var commands = {
                jsonrpc: "2.0",
                id: jsonRandomID,
                method: method_Name,
                params: params,
            };
            var options = {
                method: "POST",
                url: this.url,
                headers: {
                    "content-type": "application/json"
                },
                body: commands,
                json: true
            };
            this.requestclient(options, cb);

        } catch (error) {
            throw error;
        }
    };

    requestclient(options, callback) {
        try {
            request(options, function (error, response) {
                if (error) return callback(error);
                return callback(null, response.body.result);
            });
        } catch (error) {
            throw error;
        }
    }
}

var generateJSONID = function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}