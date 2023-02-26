"use strict";

require('dotenv').config();
const http = require('./http.js');

module.exports = async function (method, espFunction, queryParms) {
  const espParms = encryptPassword(queryParms);
  return await transmit(method, espFunction, espParms);
}

function encryptPassword(queryParms) {
  if (queryParms.password) {
    console.log('query includes password...');  
  }
  return queryParms 
}

async function transmit(method, espFunction, queryParms) {
  const url = process.env.ESP_DB_URL + espFunction;
    
  try {
    const rtn = await http(method, url, queryParms);
    let body;

    // ESP specific success processing
    if (Array.isArray(rtn.data)) {
      body = (rtn.data.length == 1) ? rtn.data[0] : rtn.data;
    } else {
      body = rtn.data
    } 
    return { status: rtn.status, body }
      
  } catch(err) {
    const newErr = new Error(JSON.stringify(err.response.data) || err.response.statusText || err.message);
    newErr.status = parseInt(err.response.status);
    throw newErr;
  }        
}
