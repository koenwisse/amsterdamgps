import { useState, useEffect } from "react";
import axios from "axios";
const api =
  "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";

// write function fFetchDoctor that fetches the right data in the table
export const FetchDoctor = () => {
  // use UseState
  const [
    // get the data
    doctors, // getter
    // and set the data in a new state
    setDoctors, // setter
  ] = useState([]); // initial state is an empty array

  // we need useEffect to fetch the data
  useEffect(() => {
    const fetchData = async () => {
      //1. Fetch data with axios, use try to get the date
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
    fetchData();
  }, []);
  console.log(doctors);

  return (
    <div>
      <table>
        <tr>
          <th>Doctor</th>
          <th>Availability </th>
        </tr>
        {/* Array.map function. The argument to map should be a function that takes a single element from the array as an argument and returns a new element.  */}
        {doctors.map((d) => (
          <tr>
            <td>{d.doctor}</td>
            <td>{d.onDuty ? "On Duty" : "Not on Duty"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
