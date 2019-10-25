import axios from "axios";
import jsonwebtoken from "jsonwebtoken";

import Configuration from "../config";
import ApiHelper from "./api.helper";

export default attatchToTangle = (apiIdentifier, apiSecret, channelId) => {

    return async (trunkTransaction, branchTransaction, minWeightMagnitude, trytes, cb) => {

        //If no callback defined, simply return the result itself
        if (!cb) {
            cb = (result) => result;
        }

        try {
            //Create the request to tangleMesh:api
            const result = await axios({
                method: 'POST',
                url: '/compute/attatchToTangle/' + encodeURIComponent (channelId),
                baseURL: Configuration.API_URL,
                headers: {
                    'X-API-KEY': ApiHelper.createApiToken (apiIdentifier, apiSecret),
                    'Content-Type': 'application/json',
                    'X-IOTA-API-Version': '1',
                },
                withCredentials: true,
                data: {
                    trunkTransaction    : trunkTransaction,
                    branchTransaction   : branchTransaction,
                    minWeightMagnitude  : minWeightMagnitude,
                    trytes              : trytes
                },
            });

            //Check for any error
            if (result.status != 200) {
                return cb (result.data);
            }
            //If result was successfull
            return cb (result.trytes);

        } catch (error) {
            return cb (error);
        }

    };

}