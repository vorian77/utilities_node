"use strict";

console.log('Launching index.js...')

"use strict";

const espConnect = require('./esp.js');
const http = require('./http.js');

module.exports = { espConnect, http }

// tests
//const { testEspConnect, testHttp } = require('./tests.js');
//testEspConnect();
//testHttp();
