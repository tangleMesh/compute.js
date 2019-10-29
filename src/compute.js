const { ApiAuthentificator, ApiClient } = require ("@tanglemesh/api-client.js");
const attatchToTangle = require ("./attatchToTangle");

module.exports = class Compute {

    constructor (apiAuthentificator) {
        if (!(apiAuthentificator instanceof ApiAuthentificator)) {
            throw new Error ("Compute.js: The apiAuthentificator must be a valid instance of ApiAuthentificator from package \"@tanglemesh/api-client.js\"!");
        }
        this.apiClient = new ApiClient ({
            apiAuthentificator: apiAuthentificator,
        });
    }

    attatchToTangle (channelId) {
        return attatchToTangle (channelId, this.apiClient);
    }

}