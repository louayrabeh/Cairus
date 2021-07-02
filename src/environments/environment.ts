// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:3000',
   firebase : {
    apiKey: "AIzaSyBhskKNS6mp_l_xnIJfHLBs9yH7Y-kbtx4",
    authDomain: "domiciliation-a76f0.firebaseapp.com",
    databaseURL: "https://domiciliation-a76f0-default-rtdb.firebaseio.com",
    projectId: "domiciliation-a76f0",
    storageBucket: "domiciliation-a76f0.appspot.com",
    messagingSenderId: "570896628389",
    appId: "1:570896628389:web:d7a624051b85dc98a42b4c",
    measurementId: "G-M7ZJHW3GVR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
