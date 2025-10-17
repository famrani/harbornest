import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
//  apiUrl: 'https://localhost:5000/analyticseats/logs', // Replace with remote API
   apiUrl: 'https://analytics.kamli.net/analyticseats/logs', // Replace with remote API
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.DEBUG,
  payment: {
    stripe: {
      publishableKey: 'pk_test_ksDl8VQ7yCT2HDpDGN0hBUXe'
    }
  }
};
