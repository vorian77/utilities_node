# Node utilities
Node.js utilites shared among my private projects. <br><br>

## espConnect
espConnect(method, espFunction, queryParms)

### Environmental Variables
SENDGRID_API_KEY <br><br>


## http
http(method, url, queryParms) <br><br>


## sendEmail
sendEmail({emailToList, emailFrom, emailSubject, emailBody})

### Environmental Variables
SENDGRID_API_KEY <br><br>


## sendText
sendText(phoneNbrTo, textBody, textMaxPrice = TWILIO_MAXPRICE)

### Environmental Variables
TWILIO_ACCT_SID

TWILIO_AUTH_TOKEN

TWILIO_PHONE_NBR

TWIIO_STATUS_CALLBACK

TWILIO_MAXPRICE (optional)