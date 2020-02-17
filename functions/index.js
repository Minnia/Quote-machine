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
    }
  };
});
