import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "./Colors.module.css";

function Colors({ items, action }) {
  return (
    <div className={styles.Colors}>
      {items.map((color) => (
        <span className={styles.ColorSquareWrapper} key={color.id}>
          <span
            className={`${styles.ColorSquare}`}
            style={{ backgroundColor: color.id }}
            onClick={() => action(color.id)}
          >
            {" "}
            <span className={styles.ColorSquareSelected}>
              {color.isSelected ? <AiOutlineCheck /> : ""}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default Colors;
