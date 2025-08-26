import React from "react";
import styles from './Cell.module.css';

function Cell({ value, onChange, rowIndex, colIndex }) {
  const backgroundClass =
    (rowIndex + colIndex) % 2 === 1 ? styles.darkCell : styles.lightCell;

  const cellClass = [
    styles.cell,
    backgroundClass,
    colIndex % 3 === 2 ? styles.borderRightStrong : styles.borderRightNormal,
    rowIndex % 3 === 2 ? styles.borderBottomStrong : styles.borderBottomNormal
  ].join(' ');

  return (
    <div className={cellClass}>
      <input
        value={value}
        onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
        className={styles.input}
        maxLength={1}
      />
    </div>
  );
}

export default Cell;