import React from 'react';
import clsx from 'clsx';
import styles from './howDifficult.module.css';

const HowDifficult = ({ number = 5, caption }) => (
  <div className={styles.howDifficultWrap}>
    <div className={styles.caption}>{caption}</div>
    <div className={styles.howDifficult}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className={clsx(styles.item, {
            [styles.active]: index < number,
          })}
          key={index}
        />
      ))}
    </div>
  </div>
);

export default HowDifficult;
