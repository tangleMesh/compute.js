# compute.js
A simple package to do computing tasks for publishing to the tangle (eg. attatchToTangle)

This package provides you some computing features to outsource some computing intensive tasks like the `attatchToTangle` method many libraries of [iotaledger](https://github.com/iotaledger/) needs.
For more details have a look on [https://tangle-mesh.io](https://tangle-mesh.io).

## Installation
This is an npm-package and you can add it to your project by using npm with:

    npm install @tangleMesh/compute.js


## Usage

    const Compute = require ('@tangleMesh/compute.js');

    // Initialize the iota compose api and use our compute-method(s)
    const { composeAPI } = require ('@iota/core');
    const iota = composeAPI ({
        provider: 'https://nodes.thetangle.org:443',
        compute: compute.attatchToTangle (
            "api-identifier",
            "api-secret",
            "channel-id",
        ),
    });


## Authorization / API key
In order to authorize your requests, you need to create an API key and secret at [https://tangle-mesh.io](https://tangle-mesh.io). The generated values can then be simply passed to the methods listed below.

## Methods

### attatchToTangle
This method can be used to overwrite the default `attatchToTangle` method from the [iotaledger](https://github.com/iotaledger/) packages.

    compute.attatchToTangle (
        apiIdentifier,
        apiSecret,
        channelId,
    )

**Parameters:**
- apiIdentifier `string` - the generated api identifier from tangleMesh
- apiSecret `string` - the generated api secret from tangleMesh
- channelId `string` - the channel id you want to pay your request with (the costs per request will be listed on [our website](https://tangle-mesh.io))

## Contact / Support
For requests or questions simply create an issue on [our repository](https://github.com/tangleMesh/compute.js) or [contact us](https://tangle-mesh.io/contact) with our form.
