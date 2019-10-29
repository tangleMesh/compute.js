module.exports = (channelId, apiClient) => {
    
    return async (trunkTransaction, branchTransaction, minWeightMagnitude, trytes, cb) => {

        //If no callback defined, simply return the result itself
        if (!cb) {
            cb = (result) => result;
        }

        //Create the request to tangleMesh:api
        const result = await apiClient.post (
            "/compute/attatchToTangle/" + encodeURIComponent (channelId),
            {
                trunkTransaction    : trunkTransaction,
                branchTransaction   : branchTransaction,
                minWeightMagnitude  : minWeightMagnitude,
                trytes              : trytes
            },
        );

        //Check for any error
        if (result.status != 200) {
            throw new Error (result.data);
        }
        //If result was successfull
        return cb (result.trytes);

    };

}