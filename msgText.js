"use strict";

require('dotenv').config();
const Twilio = require('twilio');

module.exports.sendText = async function(phoneNbrTo, textBody, textMaxPrice) {
  const functionNameError = 'sendText' 
  
  try { 
    // environmental parms
    const accountSid = process.env.TWILIO_ACCT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const phoneNbrFrom = process.env.TWILIO_PHONE_NBR;
    const textStatusCallback = process.env.TWILIO_STATUS_CALLBACK;
  
    // parms - test
    //const phoneNbrFrom = "+15005550006";  // passess all tests
    //const phoneNbrFrom = "+15005550008"; // 21611 - this number has an SMS message queue that is full
    //phoneNbrTo = "+15005550001"; // 21212 - number is invalid
    //phoneNbrTo = "+15005550002"; // 21612 - cannot route this number
    //phoneNbrTo = "++15005550003"; // 21408 - number does not have international permissions
    //phoneNbrTo = "+15005550008"; // 21611 message queue is full
    //phoneNbrTo = "+15005550006"; // no error

    const twilio = new Twilio(accountSid, authToken);
    
    // parms
    const parms = {
      from: phoneNbrFrom,
      to: phoneNbrTo,
      body: textBody,
      MaxPrice: textMaxPrice || process.env.TWILIO_MAXPRICE,
      statusCallback: textStatusCallback
    };

    try {
      const message = await twilio.messages.create(parms);
      const bodyRtn = JSON.stringify({sid: message.sid, parms});
      console.log(`${functionNameError}.Twilio create success:`, bodyRtn);
      return {
        body: bodyRtn,
        status: 201 // created
      }
    } catch(err) {
      err.message = JSON.stringify(err);
      console.error(`${functionNameError}.Twilio create error: ${err.message}`);
      throw err;
    }
    
  } catch(err) {
      console.error(`${functionNameError}.function error:`, err.message);
      err.status = parseInt(err.status) || 501; 
      throw err;
  }
}
