export const timer = ms => new Promise(res => setTimeout(res, ms));

export class UtilsService {
  private backendConfig;

  private backendUrl: string;
  public serverPort: number;

  private stripeClientId: string;
  private stripeSecretKey: string;
  private stripePublicKey: string;

  private params;

  public platformEnv = "test";

  private serviceAccountFile = "";
  public databaseURL = "";
  public config;

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
    // user.service.ts (example)
    // POST /api/users/upsert
    // body: { uid, email, displayName, role: 'guest'|'boatOwner'|'serviceProvider'|'admin' }
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