const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

//Read all quotes
app.get("api/read", (req, res) => {
  async () => {
    try {
      db.collection("quotes")
        .get()
        .then(snapshot => {
          console.log(snapshot.docs);
        });
    } catch (err) {
      console.log("Didn't work");
      //   return res.status(404).send(err);
    }
    //   return res.status(200).send("Hey!");
  };
});

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
