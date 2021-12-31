// import express
import patientsDoctors from "./src/components/patientsDoctors";
const express = require("express");

// create server
const app = express();

// register GET /hello endpoint
app.get(
  "/patients", // route
  (request, response) => {
    // handler callback
    console.log(request.path);
    response.send({ patientsDoctors });
  }
);

// register GET /hello endpoint
app.get(
  "/patients", // route
  (request, response) => {
    // handler callback
    console.log(request.path);
    response.send({ patientsDoctors.patient });
  }
);

// 3000 is common
const port = 4000;

// confirmation function
function onListen() {
  console.log(`Listening on :${port}`);
}

// start listening
app.listen(
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);
