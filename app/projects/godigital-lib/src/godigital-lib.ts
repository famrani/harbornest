import { ServicesService, regexUrl, EDITSLIDE, } from './lib/service-service';
import { UtilsService, dayInMilliseconds, guidregex } from './lib/utils.service';
import { UsersService,  } from './lib/users.service';
import { StoreDbService, OBJECTNAME, AUTHSTATUS, } from './lib/firebase-service';
import { StripeScriptService } from './lib/stripe-script.service';
import { ScriptLoadingService } from './lib/script-loading.service'


export { ServicesService, UtilsService, UsersService,     OBJECTNAME, 
     StripeScriptService, StoreDbService,
    dayInMilliseconds, ScriptLoadingService, 
    AUTHSTATUS, regexUrl,
    EDITSLIDE, guidregex, }


