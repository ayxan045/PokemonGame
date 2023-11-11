import { useState } from "react";
import { PokeHeader } from "./components/PokeHeader";
import { PokedexContent } from "./components/PokedexContent";
import pokemonData from "./data/pokemon.json";

function App() {
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);

  const start = () => {
    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newSecondTeam.length < newFirstTeam.length) {
      const randomIndex = Math.floor(Math.random() * newFirstTeam.length);
      const rmvPokemon = newFirstTeam.splice(randomIndex, 1);

      newSecondTeam.push(rmvPokemon[0]);
    }
    console.log("1team", newFirstTeam);
    console.log("2team", newSecondTeam);
    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);
  };

  const teamOnePower = firstTeam.reduce((sum,item) => sum+item?.base_experience,0);
  const teamSecondPower = secondTeam.reduce((sum,item) => sum+item?.base_experience,0);

  return (
    <div>
      <PokeHeader sayHello={start} />

      {!!secondTeam.length && (
        <div style={{display:"flex", alignItems:"center"}}>
          <PokedexContent isWinner={teamOnePower > teamSecondPower} power={teamOnePower} pokemons={firstTeam} />
          <h2 style={{ textAlign: "center", fontSize: "50px" }}>VS</h2>
          <PokedexContent isWinner={teamSecondPower > teamOnePower} power={teamSecondPower} pokemons={secondTeam} />
        </div>
      )}
    </div>
  );
}

export default App;
