"use strict";

const { espConnect } = require('./esp.js');

module.exports.testEspConnect = async function () {
  const parms = {
    method: 'get',
    espFunction: 'ws_root',
    queryParms: {}
  }

  const response = await espConnect(parms);
  console.log(JSON.stringify(response));
}