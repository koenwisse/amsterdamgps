// A detail page view the details of a specific patient
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function DetailPatient() {
  // useState to handle the state of the details and set new state
  const [details, setDetails] = useState(null);
  // useParams, used by a component rendered by a <Route> with a dynamic path to get the names and values of the current URL’s parameters
  //
  const { id } = useParams();

  // useeEffect Hook to usee axios to fetch Data from api
  useEffect(() => {
    // fetch data with axios.get, try / catch to handle issues with fetching, async because data is coming in asynchronous
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          // useParams
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
        );
        setDetails(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchDetails();
  }, [id]);
  // clg to check whats in useState
  console.log("details", details);
  // if no details return loading
  if (!details) {
    return (
      <div>
        <p> Loading...</p>
      </div>
    );
  }
  // if patient data got fetched already, render the data on the screen
  const { firstName, lastName, dateOfBirth, gender, email, phoneNumber } =
    details;
  return (
    <div>
      <h2>{firstName + " " + lastName}</h2>
      <div>
        <span>Id: {id}</span>
        <span>Date of Birth: {dateOfBirth}</span>
        <span>Gender: {gender}</span>
        <span>Contact Details:</span>
        <ul>
          <li>email: {email}</li>
          <li>Phone: {phoneNumber}</li>
        </ul>
        <span>Prescriptions:</span>
        <ul>
          {details.prescriptions.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
