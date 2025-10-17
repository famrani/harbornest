"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = exports.timer = exports.AUTHORIZE_URI = exports.TOKEN_URI = void 0;
exports.TOKEN_URI = 'https://connect.stripe.com/oauth/token';
exports.AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';
const timer = ms => new Promise(res => setTimeout(res, ms));
exports.timer = timer;
const { Vonage } = require('@vonage/server-sdk');
const vonage = new Vonage({
    apiKey: "cc59b4d3",
    apiSecret: "yF2pFHuyZoJrHQGh"
});
class UtilsService {
    constructor() {
        this.adnStoreId = 0;
        this.platformEnv = "dev";
        this.firebaseAdmin = require('firebase-admin');
        this.serviceAccountFile = "";
        this.databaseURL = "";
        this.qs = require('querystring');
        this.backendFBstoreId = '1000';
        this.backendFBstoreId2 = '2001';
    }
    fileToArray(fileName, arr) {
        return new Promise((resolve, reject) => {
            let i = 0;
            let currentDir = process.cwd();
            try {
                arr = require(currentDir + "/" + fileName);
                resolve(arr);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    readConfig(configFile, env) {
        return new Promise((resolve, reject) => {
            this.fileToArray(configFile, this.backendConfig).then(data => {
                if (!env) {
                    env = data['application'].platform;
                    this.platformEnv = env;
                }
                this.backendUrl = data[env]["backendUrl"];
                this.serverPort = data[env]["serverPort"];
                this.serviceAccountFile = process.cwd() + "/dist2/config/" + data[env]["serviceAccount"];
                this.databaseURL = data[env]["firebaseMasterConfig"]["databaseURL"];
                this.stripeClientId = data[env]["stripeConfig"]["CLIENT_ID"];
                this.stripePublicKey = data[env]["stripeConfig"]["STRIPE_API_PUBLIC_KEY"];
                this.stripeSecretKey = process.env.STRIPE_SECRET_KEY;
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getParams() {
        process.argv.forEach((val, index, array) => {
            this.params = array.slice();
        });
        if (this.params.length > 2) {
            switch (this.params[2]) {
                case "dev":
                case "test":
                case "demo":
                case "prod":
                    this.platformEnv = this.params[2];
                    break;
                default:
                    this.platformEnv = undefined;
            }
        }
        else {
            this.platformEnv = undefined;
        }
    }
    setRoutes(router) {
        router.get('/utils/getenv', (req, res) => {
            let status = 200;
            let sessionData = req.session.kamli;
            if (sessionData === undefined) {
                sessionData = {};
            }
            res.json(sessionData).status(status);
        });
    }
    async sendSMS(to, from, text) {
        await vonage.sms.send({ to, from, text })
            .then(resp => { console.log('Message sent successfully'); console.log(resp); })
            .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    }
    objectToArray(objectInput) {
        let keyI;
        let ArrayOutput = [];
        try {
            for (keyI in objectInput) {
                objectInput[keyI]["key"] = keyI;
                ArrayOutput.push(objectInput[keyI]);
            }
        }
        catch (e) {
            ArrayOutput = objectInput;
        }
        return ArrayOutput;
    }
}
exports.UtilsService = UtilsService;

//# sourceMappingURL=utils.service.js.map
