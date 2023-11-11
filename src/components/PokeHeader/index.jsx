import React from "react";
import styles from "./PokeHeader.module.css";
import { Button } from "../Button";

export const PokeHeader = (props) => {
  console.log("hello",props);
  return (
    <div className={styles.content}>
      <p className={styles.title}>Pokedex</p>
      <Button
        title="Start Game"
        color="success"
        size="large"
        onClick={props.sayHello}
      />
    </div>
  );
};
