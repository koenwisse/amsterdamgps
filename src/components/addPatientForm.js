// A page where new patients can sign up
import { useState } from "react";
// write a function / component (when pageload or when state changes)
export default function AddPatientForm() {
  // firstName holds whatever the user types
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  //1. Write a new function to add a patient
  //   const addPatient = (firstName) => {
  //     //1.1. Define a new patient
  //     const newPatient = {
  //       id: patients.length + 1,
  //       firstname: firstName,
  //       //   lastname: lastName,
  //       //   email: email,
  //       //   gender: gender,
  //       //   date: date,
  //     };
  //     //1.2. Put the new patient in the array
  //     const updatedArray = [...patients, newPatient]; // copy the previous array and add the player
  //     //1.3. Put array in the state
  //     setPlayers(updatedArray);

  // 2.2. function to handle the submit the form / eventhandler
  const handleSubmit = (event) => {
    //2.3. prevents the form from refreshing the page and add event as parameter of function
    event.preventDefault();
    console.log({ firstName, lastName, email, gender, date });
  };

  return (
    //2.1.  add form in div in return
    <div>
      {" "}
      {/* event ent listener */}
      <form onSubmit={handleSubmit}>
        <h3>PATIENT SIGNUP</h3>
        <ul>
          <label>
            first name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
        </ul>
        <ul>
          <label>
            last name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
        </ul>

        <ul>
          <label>
            email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </ul>
        <ul>
          <label>
            gender:
            <select
              type="value"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </ul>
        <ul>
          <label>
            date:
            <input
              type="date"
              date={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
        </ul>
        <ul>
          <input type="submit" value="Submit" />
        </ul>
      </form>
    </div>
  );
}
// }
