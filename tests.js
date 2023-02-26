"use strict";

const espConnect = require('./esp.js');
const http = require('./http.js');

module.exports.testEspConnect = async function () {
  const method = 'post';
  const espFunction = '/ws_test';
  const queryParms = { status: 200, parm1: 'v1', parm2: 'v2 '};

  const response = await espConnect(method, espFunction, queryParms);
  console.log(JSON.stringify(response));
}

module.exports.testHttp = async function () {
  const method = 'post';
  const url = 'https://webhook.site/14818aef-1006-49a1-866d-55b4cad4fb03';
  const query = {parm1:'v1', parm2:'v2'};

  try {
    const response = await http(method, url, query);
    return {
      body: response.statusText,
      status: response.status
    }
  } catch(err) {
    throw err;
  }
}