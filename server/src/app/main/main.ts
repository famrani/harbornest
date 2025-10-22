import { config } from 'dotenv';
import { Locations, OBJECTNAME, Users } from '../services/firebase.service';
import { StoreDbService } from '../services/firebase.service'; // <== your updated store
import { UtilsService } from '../services/utils.service';
import { WebServerComponent } from '../components/webServer.component';
import { StripeService } from '../services/stripeAdn';
import { getAuth } from 'firebase-admin/auth';

config(); // Load .env file

export class MainComponent {
    private backendFbObjects = [
        OBJECTNAME.wnUsers,
        OBJECTNAME.wnLocations,
        OBJECTNAME.wnBookings,
    ];

    private utilSvc = new UtilsService();
    private storeDbSvc = new StoreDbService(this.utilSvc);
    private stripeSvc = new StripeService();

    private webServerComponent = new WebServerComponent(this.utilSvc, this.stripeSvc, );

    public version: string;

    constructor() {
        this.utilSvc.getParams();
        this.initBackend();
    }

    public async initBackend(platform?: string, backendFbObjects = this.backendFbObjects): Promise<void> {
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
        } catch (error) {
            console.error('Error during backend initialization:', error);
            throw error;
        }
    }


    async cleanUpUsers() {
        const listAllUsers = (nextPageToken) => {
            let wnUser: Users;
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

    async listAuthUsers(nextPageToken?: string) {
        const auth = getAuth();

        try {
            const listUsersResult = await auth.listUsers(1000, nextPageToken);

            listUsersResult.users.forEach(userRecord => {
                console.log('User:', userRecord.toJSON());
            });

            if (listUsersResult.pageToken) {
                // If there are more users, recursively list them
                await this.listAuthUsers(listUsersResult.pageToken);
            }
        } catch (error) {
            console.error('Error listing Firebase Auth users:', error);
        }
    }

    async createUsers() {
        const temp = await this.storeDbSvc.getObject(OBJECTNAME.wnUsers);
        const temptemp = this.utilSvc.objectToArray(temp) as Users[];


        for (let u of temptemp) {
            try {
                console.log('b new userid=', u.userId, ', for email=', u.email);
                let preuid = u.userId;
                const userid = await this.storeDbSvc.getUserIdByEmail(u.email) as any;
                u.userId = userid;
                console.log('a new userid=', u.userId, ', for email=', u.email);
                await this.storeDbSvc.setObject(OBJECTNAME.wnUsers + '/' + u.userId, u);
                await this.storeDbSvc.removeObject(OBJECTNAME.wnUsers + '/' + preuid);
            } catch (e) {
                console.log('error e=', e)
            }
        }
    }

    async attachListingToUsers() {
        const loc = await this.storeDbSvc.getObject(OBJECTNAME.wnLocations);
        const locloc = this.utilSvc.objectToArray(loc) as Locations[];

        const user = await this.storeDbSvc.getObject(OBJECTNAME.wnUsers);
        const useruser = this.utilSvc.objectToArray(user) as Users[];


        let i = 0;
        for (let l of locloc) {
            try {
                l.owner = useruser[i].userId;
                await this.storeDbSvc.setObject(OBJECTNAME.wnLocations + '/' + l.locationId, l);
            } catch (e) {

            }
            i++;
        }
    }

}
