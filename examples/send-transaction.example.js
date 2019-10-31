const Compute = require ("../index");
const { ApiAuthentificator } = require ("@tanglemesh/api-client.js");
const { composeAPI } = require ("@iota/core");

(async () => {
    
    // Set credentials for using the tangleMesh:api
    const apiIdentifier = "7DE635ECF529629BA113571D2A288598",
          apiSecret = "A4BEF4E7CE564EDD2BD8141F1D6546S567F659DC8F30D9918B2F17C387BD7B60",
          channelId = "7458d984-47ea-4ee1-bfbc-e3016a233f35";
    const apiAuth = new ApiAuthentificator (apiIdentifier, apiSecret);

    // Create the `compute` object for doing computation tasks
    const compute = new Compute (apiAuth);

    // Initialize the iota compose api and use our compute-method(s)
    const compose = composeAPI ({
        provider: 'https://nodes.thetangle.org:443',
        attachToTangle: compute.attatchToTangle (channelId),
    });

    // Create a random seed (depending on your applications, you could also use a saved key, or anything else)
    const charWhitelist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
    const seed = [...Array(81)].reduce(a=>a+charWhitelist[~~(Math.random()*charWhitelist.length)],''); // dummy seed, do not use it for value transfers!

    // Prepare the transaction(s) to send [in this example it is a zero-value transaction, but you can of course send any amount, depending on how much balance you seed has]
    const transfers = [{
        address: "9".repeat (81),
        value: 0,
        tag: 'TANGLE9MESH9API',
        message: 'CCWCXCGDEAXCGDEAGDCDADTCEAHDTCGDHDEAWBTCGDGDPCVCTCFA'
    }];

    // Use the iota-library as you normally would (Prepare transfers)
    compose.prepareTransfers (seed, transfers)
        .then (trytes => {
            // You could temporary save the trytes, to create reattatchments, if the broadcast fails
            // Now do the POW with our remove-server and broadcast to the tangle-network
            return compose.sendTrytes (trytes, 3, 14)
        })
        .then (bundle => {
            console.log ("The bundle:", bundle);
            console.log ("Explore your bundle:", "https://thetangle.org/transaction/" + bundle[0].hash);
        })
        .catch (error => {
            console.error ("ERROR", error);
        })


})();