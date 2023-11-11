import React from "react";
import styles from "./PokeCard.module.css";

export const PokeCard = (props) => {
  console.log("...poke", props);

  const pokemonImg = (id) => {
    const newId = id.toString();
    let resultId = id;
    console.log("result", resultId);
    // const resultId = newId.length == 1 ? "00" + newId : newId.length == 2 ? "0" + newId : id;

    if (newId.length == 1) {
      resultId = "00" + id;
    }
    if (newId.length == 2) {
      resultId = "0" + id;
    }
    return resultId;
  };
  return (
    <div className={styles.cardBox}>
      <p className={styles.pokeName}>{props.name}</p>
      <img
        src={` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImg(
          props.id
        )}.png`}
        alt=""
      />
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
};
