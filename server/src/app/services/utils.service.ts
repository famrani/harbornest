export const TOKEN_URI = 'https://connect.stripe.com/oauth/token';
export const AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

export const timer = ms => new Promise(res => setTimeout(res, ms));

interface Result {
  answer: string;
}

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "cc59b4d3",
  apiSecret: "yF2pFHuyZoJrHQGh"
})


export class UtilsService {
  public backendConfig;

  public adnStoreId = 0;

  public backendUrl: string;
  public serverUrl: string;
  public serverUrlShort: string;
  public serverPort: number;

  public stripeClientId: string;
  public stripeSecretKey: string;
  public stripePublicKey: string;

  public params;

  public platformEnv = "dev";

  public session;

  public firebaseAdmin = require('firebase-admin');
  public serviceAccountFile = "";
  public databaseURL = "";
  public mdb;
  public config;
  public stripeWebhookSecretKey;
  public qs = require('querystring');
  public backendFBstoreId = '1000';
  public backendFBstoreId2 = '2001';


  constructor() {
  }

  fileToArray(fileName, arr): Promise<any[]> {
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
    })
  }

  readConfig(configFile: string, env: string) {
    return new Promise((resolve, reject) => {
      this.fileToArray(configFile, this.backendConfig).then(
        data => {
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
        },
        error => {
          reject(error)
        })
    })
  }

  getParams() {
    process.argv.forEach((val, index, array) => {
      this.params = array.slice();
    })
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
      res.json(sessionData).status(status)
    });
  }

  async sendSMS(to, from, text) {
      await vonage.sms.send({to, from, text})
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