module.exports = (channelId, apiClient) => {
    
    return async (trunkTransaction, branchTransaction, minWeightMagnitude, trytes, cb) => {

        try {
            //Create the request to tangleMesh:api
            const result = await apiClient.post (
                "/compute/attatchToTangle",
                {
                    channelId,
                    trunkTransaction    : trunkTransaction,
                    branchTransaction   : branchTransaction,
                    minWeightMagnitude  : minWeightMagnitude,
                    trytes              : trytes
                },
            );

            if (cb) {
                return cb (result);
            }
            return result;

        } catch (e) {
            if (cb) {
                return cb (e);
            }
            throw e;
        }

    };

}