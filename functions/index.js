const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51CADC4DqAwno7ZTXgqOMIroxVFImz9QZXYWMBAwwPP7SbZjGzBlRVwy6N0uDfdEDSKH2rRoqZ7ohLA3V9wHnzuBO00KpAM6CUw"
);

// API

// APPCONFIG
const app = express();

// MIDDLEFACES
app.use(cors({ origin: true }));
app.use(express.json());

// APIROUTES
app.get("/", (request, response) => response.status(200).send("helloface"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Has Been Recieved <3 >>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //SUBUNUTS * 100
    currency: "usd",
  });
  // OKAYS
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN!!!CMD
exports.api = functions.https.onRequest(app);

// ENDING
// http://localhost:5001/clone-76094/us-central1/api
