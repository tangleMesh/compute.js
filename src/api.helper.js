import PackageJson from "../package.json";

export default class ApiHelper {

    static createApiToken (
        apiIdentifier,
        apiSecret
    ) {
        return jsonwebtoken.sign ({
            data: {
                identifier: apiIdentifier,
            },
            receiver: "https://api.tangle-mesh.io",
        }, apiSecret, {
            algorithm: "HS512",
            expiresIn: String (1000*60*15) + "ms",
            audience: "tangle-mesh",
            issuer: PackageJson.name,
            subject: "api",
        });
    }

};