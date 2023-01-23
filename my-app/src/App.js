import React, { useState, useEffect } from "react";
import { Detail } from './Detail';

// Endpoints for PokeApi
export default function App() {
  //Pokemon Names 
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

       
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', // please declare URLs in a seperate file
    )
      .then(response => response.json())
      .then(json => setPokemons(json.results))
  }, [])

  return (
    <div className="App">
      
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
             {/* Please use Button from bootstrap, it is more likely that you will be using components from libs rather than reating new ones
             it is important to get used to reading docs and re-using created logic. It really speeds the development long-term  */}
            <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
          </li>
        ))}
    

      {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url}/>}
    </div>
  )
} 
