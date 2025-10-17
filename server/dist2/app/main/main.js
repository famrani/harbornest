"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainComponent = void 0;
const dotenv_1 = require("dotenv");
const firebase_service_1 = require("../services/firebase.service");
const firebase_service_2 = require("../services/firebase.service"); // <== your updated store
const utils_service_1 = require("../services/utils.service");
const webServer_component_1 = require("../components/webServer.component");
const stripeAdn_1 = require("../services/stripeAdn");
const auth_1 = require("firebase-admin/auth");
(0, dotenv_1.config)(); // Load .env file
class MainComponent {
    constructor() {
        this.backendFbObjects = [
            firebase_service_1.OBJECTNAME.wnUsers,
            firebase_service_1.OBJECTNAME.wnLocations,
            firebase_service_1.OBJECTNAME.wnBookings,
        ];
        this.utilSvc = new utils_service_1.UtilsService();
        this.storeDbSvc = new firebase_service_2.StoreDbService(this.utilSvc);
        this.stripeSvc = new stripeAdn_1.StripeService();
        this.webServerComponent = new webServer_component_1.WebServerComponent(this.utilSvc, this.stripeSvc);
        this.utilSvc.getParams();
        this.initBackend();
    }
    async initBackend(platform, backendFbObjects = this.backendFbObjects) {
        try {
            const configData = await this.utilSvc.readConfig("/dist2/config/adf.json", platform || this.utilSvc.platformEnv);
            this.utilSvc.config = configData;
            this.webServerComponent.initWebServer(); // Start Express server
            this.storeDbSvc.initFirebase();
            //            this.createUsers();
            //            this.attachListingToUsers();
            if (this.utilSvc.config.application?.release) {
                this.version = this.utilSvc.config.application.release;
            }
        }
        catch (error) {
            console.error('Error during backend initialization:', error);
            throw error;
        }
    }
    async cleanUpUsers() {
        const listAllUsers = (nextPageToken) => {
            let wnUser;
            // List batch of users, 1000 at a time.
            this.utilSvc.firebaseAdmin
                .auth()
                .listUsers(1000, nextPageToken)
                .then(async (listUsersResult) => {
                console.log('listUsersResult=', listUsersResult);
            })
                .catch((error) => {
                console.log('Error listing users:', error);
            });
        };
    }
    async listAuthUsers(nextPageToken) {
        const auth = (0, auth_1.getAuth)();
        try {
            const listUsersResult = await auth.listUsers(1000, nextPageToken);
            listUsersResult.users.forEach(userRecord => {
                console.log('User:', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // If there are more users, recursively list them
                await this.listAuthUsers(listUsersResult.pageToken);
            }
        }
        catch (error) {
            console.error('Error listing Firebase Auth users:', error);
        }
    }
    async createUsers() {
        const temp = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.wnUsers);
        const temptemp = this.utilSvc.objectToArray(temp);
        for (let u of temptemp) {
            try {
                console.log('b new userid=', u.userId, ', for email=', u.email);
                let preuid = u.userId;
                const userid = await this.storeDbSvc.getUserIdByEmail(u.email);
                u.userId = userid;
                console.log('a new userid=', u.userId, ', for email=', u.email);
                await this.storeDbSvc.setObject(firebase_service_1.OBJECTNAME.wnUsers + '/' + u.userId, u);
                await this.storeDbSvc.removeObject(firebase_service_1.OBJECTNAME.wnUsers + '/' + preuid);
            }
            catch (e) {
                console.log('error e=', e);
            }
        }
    }
    async attachListingToUsers() {
        const loc = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.wnLocations);
        const locloc = this.utilSvc.objectToArray(loc);
        const user = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.wnUsers);
        const useruser = this.utilSvc.objectToArray(user);
        let i = 0;
        for (let l of locloc) {
            try {
                l.owner = useruser[i].userId;
                await this.storeDbSvc.setObject(firebase_service_1.OBJECTNAME.wnLocations + '/' + l.locationId, l);
            }
            catch (e) {
            }
            i++;
        }
    }
}
exports.MainComponent = MainComponent;

//# sourceMappingURL=main.js.map
