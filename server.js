// import express

const express = require("express");

// create server
const app = express();
const patientsDoctors = require("./public/patientsdoctors.json");

// register GET endpoint
app.get(
  // get full list now but should only get patients
  "/patients", // route
  (request, response) => {
    // handler callback
    console.log(request.path);
    response.send({ patientsDoctors });
  }
);

app.get(
  // get full list now but should only get patients
  "/doctors", // route
  (request, response) => {
    // handler callback
    console.log(request.path);
    response.send({ patientsDoctors });
  }
);

app.get(
  "/patients:id", // route
  (request, response) => {
    patients_id = request.params.id;
    // handler callback
    console.log(request.path);
    // parseInt turns string representation of number into actual number
    response.send(
      patientsDoctors.find((patients) => patients.id === parseInt(patients_id))
    );
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
