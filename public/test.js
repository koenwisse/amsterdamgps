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