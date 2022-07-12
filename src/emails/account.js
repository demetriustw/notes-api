// still in blue stuff ---------------------------------
const Sib = require("sib-api-v3-sdk");

require("dotenv").config();

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "dwhites49@s.tooeletech.edu",
};

const receivers = [
  {
    email: "dtobyw@gmail.com",
  },
];

const sendWelcomeEmail = (email, name) =>
  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      subject: "Thanks for joining in!",
      textContent: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
      // htmlContent: "",
    })
    .then(console.log)
    .catch(console.log);

const sendCancelationEmail = (email, name) =>
  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      subject: "Sorry to see you go!",
      textContent: `GoodBye, ${name}. I hope to see you back sometime soon.`,
      // htmlContent: "",
    })
    .then(console.log)
    .catch(console.log);

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

// GET DATA FOR YOUR API AKA. YOUR CALL AMOUT LEFT -----------------------------------
var api = new Sib.AccountApi();
api.getAccount().then(
  function (data) {
    console.log("API called successfully. Returned data:");
    console.log("Credits left: " + data.plan[0].credits);
  },
  function (error) {
    console.error(error);
  }
);
