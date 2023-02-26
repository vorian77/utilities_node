"use strict";

const { espConnect } = require('./esp.js');
const { sendText } = require('./msgText.js');

module.exports.testEspConnect = async function () {
  const parms = {
    method: 'get',
    espFunction: 'ws_root',
    queryParms: {}
  }

  const response = await espConnect(parms);
  console.log(JSON.stringify(response));
}

module.exports.testSendText = async function () {
  const to = '+12487985578';
  const body = 'Testing from node_utilities';
  const maxPrice = '0.0075'  // optional

  const response = await sendText(to, body, maxPrice);
  console.log(JSON.stringify(response));
}
