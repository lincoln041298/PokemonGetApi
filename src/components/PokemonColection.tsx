import React from "react";
import { Pokemon } from "../inteface";
import PokemonList from "./PokemonList";
import './pokemon.css'
interface pokemonsProps {
  pokemons: Pokemon[];
}

const PokemonColection: React.FC<pokemonsProps> = (pokemonsProps) => {
  const { pokemons } = pokemonsProps;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon)=> {
          return (
            <div className="">
              <PokemonList
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              />
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default PokemonColection;
