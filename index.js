"use strict";

console.log('Launching index.js...')

"use strict";

const { espConnect } = require('./esp.js');
const http = require('./http.js');
const { sendEmail } = require('./msgMail.js');
const { sendText } = require('./msgText.js');

module.exports = { espConnect, http, sendEmail, sendText }

// tests
//const { testEspConnect, testSendText } = require('./tests.js');
//testEspConnect();
//testSendText();
