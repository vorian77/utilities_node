"use strict";

const Twilio = require('twilio');

const sendText = async function(phoneNbrTo, textBody, textMaxPrice) {
  const functionNameError = 'sendText'
  let status, body;

  try { 
    // environmental parms
    const accountSid = process.env.TWILIO_ACCT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const phoneNbrFrom = process.env.TWIIO_PHONE_NBR;
    const textStatusCallback = process.env.TWIIO_STATUS_CALLBACK;

    // parms - test
    //const accountSid = 'ACf6fbaa03498ff902b503126444534474'; // Your Account SID from www.twilio.com/console
    //const authToken = 'db08ca8ffd790d3bb8138a6957137bf2'; // Your Auth Token from www.twilio.com/console
    //const phoneNbrFrom = "+15005550006";  // passess all tests
    //const phoneNbrFrom = "+15005550008". // 21611 - this number has an SMS message queue that is full
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
      MaxPrice: textMaxPrice,
      statusCallback: textStatusCallback
    };

    try {
      const message = await twilio.messages.create(parms);
      const bodyRtn = JSON.stringify({sid: message.sid, parms});
      console.log(`${functionNameError}.Twilio create success:`, bodyRtn);
      ctx.body = bodyRtn;
    } catch(err) {
      console.error(`${functionNameError}.Twilio create error: ${JSON.stringify(err)}`);
      throw err;
    }
    
  } catch(err) {
      console.error(`${functionNameError}.error:`, err.message);
      err.status = parseInt(err.status) || 501; 
      throw err;
  }
}

exports.sendText = sendText;