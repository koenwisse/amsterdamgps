// A page where doctors view which patients are in their database
import { useState, useEffect } from "react";
import { PatientCard } from "../components/PatientCard";
import axios from "axios";

export default function PatientDatabase() {
  // use UseState
  const [
    // get the data
    doctors, // getter, variable that holds the doctors
    // and set the data in a new state
    setDoctors, // setter, a function that updates the doctors variable with a new state
  ] = useState([]); // initial state is an empty array
  // we need useState to handle the patients state in the card
  const [patients, setPatients] = useState([]);
  // we need usestate to control the states of the selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState(0);
  console.log(doctors);

  // we need useEffect to fetch the data
  useEffect(() => {
    const fetchDoctors = async () => {
      //1. Fetch data with axios, use try to get the data
      try {
        // define a const "response" to store the data in the api and use axios package syntax
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
        );
        //2. clg response to see if you get the date
        console.log("response", response);
        // pass the value in the response.data as an argument to the setter to set the data
        setDoctors(response.data);
        // if error in fetching data it logs
      } catch (error) {
        console.log(error.message);
      }
    };
    // fetch patients for the card with axios
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
        );
        setPatients(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    // call fetchDoctors and fPatients so that the doctors show in the dropdown
    fetchDoctors();
    fetchPatients();
  }, []);

  return (
    <div>
      <h3> Patient Database</h3>
      <div>
        <label>doctor</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(parseInt(e.target.value))} // when selected doctor changes,
        >
          <option value={0}>All</option>
          {/* map all patients when all is is selected */}
          {doctors.map((d) => (
            <option value={d.id} key={d.id}>
              {d.doctor}
            </option>
          ))}
        </select>
      </div>
      <div>
        {[...patients] // copy the patients because we need to .sort the patients on last name
          .filter((p) => !selectedDoctor || p.doctorId === selectedDoctor) // .filter creates new array with all elements that pass the test ->
          .sort((p1, p2) => p1.lastName.localeCompare(p2.lastName)) // we sort the result
          // map the sorted patients in to the Cards
          .map((p) => (
            <PatientCard patient={p} key={p.id} />
          ))}
      </div>
    </div>
  );
}
