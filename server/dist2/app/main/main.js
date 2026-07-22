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
const booking_service_1 = require("../services/booking.service");
const users_service_1 = require("../services/users.service");
const mailer_service_1 = require("../services/mailer.service");
const boatowners_service_1 = require("../services/boatowners.service");
const feedbacks_service_1 = require("../services/feedbacks.service");
const content_service_1 = require("../services/content.service");
(0, dotenv_1.config)(); // Load .env file
class MainComponent {
    constructor() {
        this.backendFbObjects = [
            firebase_service_1.OBJECTNAME.bnUsers,
            firebase_service_1.OBJECTNAME.bnLocations,
            firebase_service_1.OBJECTNAME.bnBookings,
            firebase_service_1.OBJECTNAME.guestInfo,
            firebase_service_1.OBJECTNAME.bnExtraServices,
        ];
        this.utilSvc = new utils_service_1.UtilsService();
        this.storeDbSvc = new firebase_service_2.StoreDbService(this.utilSvc);
        this.stripeSvc = new stripeAdn_1.StripeService(this.storeDbSvc);
        this.mailerSvc = new mailer_service_1.MailerService();
        this.usersSvc = new users_service_1.UsersService(this.storeDbSvc);
        this.boatownersSvc = new boatowners_service_1.BoatownersService(this.storeDbSvc);
        this.feedbacksSvc = new feedbacks_service_1.FeedbacksService(this.storeDbSvc);
        this.contentSvc = new content_service_1.ContentService(this.storeDbSvc);
        this.bookingsSvc = new booking_service_1.BookingsService(this.mailerSvc, this.storeDbSvc, this.stripeSvc);
        this.webServerComponent = new webServer_component_1.WebServerComponent(this.utilSvc, this.stripeSvc, this.bookingsSvc, this.usersSvc, this.boatownersSvc, this.feedbacksSvc, this.contentSvc);
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
            this.storeDbSvc.auth.listUsers(1000, nextPageToken)
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
        const temp = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.bnUsers);
        const temptemp = this.utilSvc.objectToArray(temp);
        for (let u of temptemp) {
            try {
                console.log('b new userid=', u.userId, ', for email=', u.email);
                let preuid = u.userId;
                const userid = await this.storeDbSvc.getUserIdByEmail(u.email);
                u.userId = userid;
                console.log('a new userid=', u.userId, ', for email=', u.email);
                await this.storeDbSvc.setObject(firebase_service_1.OBJECTNAME.bnUsers + '/' + u.userId, u);
                await this.storeDbSvc.removeObject(firebase_service_1.OBJECTNAME.bnUsers + '/' + preuid);
            }
            catch (e) {
                console.log('error e=', e);
            }
        }
    }
    async attachListingToUsers() {
        const loc = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.bnLocations);
        const locloc = this.utilSvc.objectToArray(loc);
        const user = await this.storeDbSvc.getObject(firebase_service_1.OBJECTNAME.bnUsers);
        const useruser = this.utilSvc.objectToArray(user);
        let i = 0;
        for (let l of locloc) {
            try {
                l.owner = useruser[i].userId;
                await this.storeDbSvc.setObject(firebase_service_1.OBJECTNAME.bnLocations + '/' + l.locationId, l);
            }
            catch (e) {
            }
            i++;
        }
    }
}
exports.MainComponent = MainComponent;

//# sourceMappingURL=main.js.map
