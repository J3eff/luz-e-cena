import React from "react";
import styles from "./Fieldset.module.css";

type FieldseatProps = {
  variant?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ({ children, variant }: FieldseatProps) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  );
};

export default Fieldset;
