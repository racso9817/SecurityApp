// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCCTqeZ9r7eARkqXMcBHm9dW7nfrG4y7e8",
    authDomain: "pruebaesp-f3402.firebaseapp.com",
    databaseURL: "https://pruebaesp-f3402-default-rtdb.firebaseio.com",
    projectId: "pruebaesp-f3402",
    storageBucket: "pruebaesp-f3402.appspot.com",
    messagingSenderId: "706748680758",
    appId: "1:706748680758:web:e9f49b693b672d95d0a697",
    measurementId: "G-W5WP5VQ1B1"
  },

  coleccionUsuarios: {
    usuarios: 'usuarioSecutiry',
    carro: 'carroSecurity',
    location: 'locationSecurity',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
