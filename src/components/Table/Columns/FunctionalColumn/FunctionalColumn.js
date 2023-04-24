import React from 'react';
import clsx from 'clsx';
import styles from './functionalColumn.module.css';
import { FUNCTIONAL_CONST } from './constant';

export const FunctionalColumn = ({ caption, value }) => (
  <>
    <div className={styles.caption}>{caption}</div>
    {FUNCTIONAL_CONST.map((item) => (
      <div
        key={item}
        className={clsx(styles.item, {
          [styles.present]: value.includes(item),
        })}
      >
        {item}
      </div>
    ))}
  </>
);
