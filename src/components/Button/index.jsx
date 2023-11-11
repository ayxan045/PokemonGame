import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  const {
    color = "danger",
    size = "medium",
    title = "Button",
    children,
    onClick,
  } = props;

  return (
    <div>
      <button
        onClick={onClick}
        className={`${styles[color]} ${styles["btn"]} ${styles[size]}`}
      >
        {children || title}
      </button>
    </div>
  );
};
