import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
//  apiUrl: 'https://localhost:5000/analyticseats/logs', // Replace with remote API
   apiUrl: 'https://analytics.kamli.net/analyticseats/logs', // Replace with remote API
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.DEBUG,
  payment: {
    stripe: {
      publishableKey: 'pk_live_51KtqqrAlpat25hAYT5ioWOPDPaUt7cfj4J6eyJDaEbi1DbhswNGmRnq3GBZ5Uf0YiDryDYv8Brsg4J8Kh188okj200qP73hpPT'
    }
  }
};
