"use strict";

console.log('Launching index.js...')

const http = require('./http.js');
const { sendEmail } = require('./msgMail.js');
const { sendText } = require('./msgText.js');

module.exports = { http, sendEmail, sendText }
