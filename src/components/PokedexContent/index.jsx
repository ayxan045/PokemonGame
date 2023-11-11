import React from "react";
import { PokeCard } from "../PokeCard";
import styles from "./PokedexContent.module.css";

export const PokedexContent = (props) => {
  console.log("pokedexContent", props);
  return (
    <div className={styles.container}>
      <p className={`${styles.titleWinner} ${props.isWinner ? styles.green : styles.red}`}>{props.isWinner ? "Winner" : "Lose"}</p>
      <span className={`${styles.titleWinner} ${styles.border}`}>Power:{props.power}</span>
      <div className={styles.pokeBox}>
        {props.pokemons?.map((pokemon) => (
          <PokeCard key={"pokecard" + pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};
