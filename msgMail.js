"use strict";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async function(msg) {
  const functionNameError = 'sendEmail';

  const emailToList = msg.emailToList;
  const emailFrom = msg.emailFrom;
  const emailSubject = msg.emailSubject;
  const emailBody = msg.emaiBody;
  
  try {
    // parms  
    const msg = {
      to: emailToList.split(','),
      from: emailFrom,
      subject: emailSubject,
      html: emailBody
    };

    // send
    try {
      console.log(`${functionNameError}.sendGrid.options...`, msg);
      const response = await sgMail.send(msg);
      console.log(`${functionNameError}.sendGrid.succsfull.`);
      return {
        body: JSON.stringify(response[0].headers),
        status: response[0].statusCode
      }
    } catch(err) {
      console.log(`${functionNameError}.sendGrid.error...`)
      const newErr = new Error(JSON.stringify(err.response.body.errors[0]));
      newErr.status = err.code;
      throw newErr;
    }
  } catch(err) {
    console.log(`${functionNameError}.function.error...`)
    err.status = parseInt(err.status) || 501; 
    throw err;
  }
}

exports.sendEmail = sendEmail;