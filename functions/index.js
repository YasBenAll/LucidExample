<<<<<<< HEAD
const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
=======
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-catch */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const clientId = functions.config().paypal.client_id;
const secretKey = functions.config().paypal.secret_key;
const paypal = require("@paypal/checkout-server-sdk");
const env = new paypal.core.SandboxEnvironment(clientId, secretKey);
const client = new paypal.core.PayPalHttpClient(env);
let request = new paypal.orders.OrdersCreateRequest();
const admin = require("firebase-admin");

exports.addPaidClaim = functions.https.onCall(async (data, context) => {
  return new Promise(function(resolve, reject) {
    request({
      url: URL,
      method: "POST",
      json: true,
      body: admin.auth().setCustomUserClaims(data.uid, {
        paid: true,
      }),
    }, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
});

exports.paypalCreateOrder = functions.https.onCall(async (data, context) => {
  try {
    request.requestBody({
      "intent": "CAPTURE",
      "purchase_units": [
        {
          "description": "Lucid Trading Course",
          "amount": {
            "currency_code": "EUR",
            "value": 0.01,
          },
        },
      ],
    });
    const response = await client.execute(request);
    return response.result;
  } catch (error) {
    throw error;
  }
});

exports.paypalHandleOrder = functions.https.onCall(async (data, context) => {
  const orderId = data.orderId;
  request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});
  const response = await client.execute(request);
  return response.result;
>>>>>>> firebase-functions
});
