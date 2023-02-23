const axios = require('axios'); 
const qs = require('qs'); 

module.exports.request = async function (method, url, queryParms) {
  let options;

  switch(method.toLowerCase()) {
    case 'get':
      options = { method, url, params: queryParms, timeout: 1000 }
      break;

    default:  // put, post, delete, patch
      options = { method, url, data: qs.stringify(queryParms), timeout: 1000 }
  }
    
  try {
      console.log('Axios options...', options);
      const response = await axios(options);
      console.log('Axios successful.');
      return response
    } catch(err) {
      err.status = err.response.status;
      throw err;
    }
}
