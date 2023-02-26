"use strict";

const { espConnect } = require('./esp.js');
const { sendText } = require('./msgText.js');

module.exports.testEspConnect = async function () {
  const method = 'post';
  const espFunction = 'ws_test';
  const queryParms = { status: 200, parm1: 'v1', parm2: 'v2 '};

  const response = await espConnect(method, espFunction, queryParms);
  console.log(JSON.stringify(response));
}

module.exports.testSendText = async function () {
  const to = '+12487985578';
  const body = 'Testing from node_utilities';
  const maxPrice = '0.0075'  // optional

  const response = await sendText(to, body, maxPrice);
  console.log(JSON.stringify(response));
}
