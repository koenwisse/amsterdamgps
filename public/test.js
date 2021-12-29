mport { useState } from "react"
import PlayerCard from "./PlayerCard";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard(){

  //state to hold our selected option
  const [ sortBy, setSortBy ] = useState("score")

  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  //increment player score by 1
  const incrementScore = (id) => {
    //mapping the players array
    const updatedPlayers = players.map(player => {
      //if it's the id we want to update, we do score + 1
      if (player.id === id){
        return {
          //... copying the player data
          ...player, // = name: player.name, id: player.id
          score: player.score + 1
        }
        //else we just return the player as it's
      } else {
        return player
      }
    })
    //updating 
    setPlayers(updatedPlayers)
  }

  //sort By Score
  const compareByScore = (a, b) => b.score - a.score 

  //sort By Name
  const compareByName = (a, b) => a.name.localeCompare(b.name)

  //Sort the array depending on what the user selected
  //for this, we check the value of sortBy
  const sortedPlayers = sortBy === "score"
    ? [...players].sort(compareByScore)
    : [...players].sort(compareByName)

  const changeSorting = (event) => {
    console.log("selected:", event.target.value)
    setSortBy(event.target.value)
  }

  //Write a function to add a player
  const addPlayer = (name) => {
    //1. Define a new player
    const newPlayer = { id: players.length + 1, name: name, score: 0}
    //2. Put the new player in the array
    const updatedArray = [ ...players, newPlayer] //copy the previous array + newPlayer
    //3. Put in the state
    setPlayers(updatedArray)
  }

  return(
    <div>
      {/* add a selector so the user can choose */}
      <select onChange={changeSorting}>
        <option value="score">Score</option>
        <option value="name">Name</option>
      </select>
      {/* mapping over the sorted array instead */}
      {sortedPlayers.map(player => <PlayerCard 
        key={player.id}
        name={player.name} 
        score={player.score}
        id={player.id}
        //callback props
        incrementScore={incrementScore}/>)}
        {/* make the function available in AddPlayerForm */}
      <AddPlayerForm addPlayer={addPlayer}/> 
    </div>
  )
}

//////// addPatientForm


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

  const [done, setDone] = useState(false);

  // 2.2. function to handle the submit the form / eventhandler
  const handleSubmit = (event) => {
    //2.3. prevents the form from refreshing the page and add event as parameter of function
    event.preventDefault();
    console.log({ firstName, lastName, email, gender, date });
  };

  return (
    //2.1.  add form in div in return
    <div>
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
                <option value={0}>Select</option>
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
      <div style={{ marginTop: 20 }}>{done}</div>
    </div>
  );
}
// }
