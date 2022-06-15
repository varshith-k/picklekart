const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')("sk_test_51L6GKISCOKFVuCMcxEu9Y8Yk9efs2LRYXeP10c7mB7bMFbC0sbivj0UE0qiq05F0eo7JJud8briAu6pcQEqWQ5KT006RTC9evn")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API

// --App config
const app = express();
// --Middlewares
app.use(cors({
    origin : true
}));
app.use(express.json());

// --App Routes

// --Listen command