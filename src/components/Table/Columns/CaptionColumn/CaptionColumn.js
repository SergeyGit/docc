import React from 'react';
import styles from './captionColumn.module.css';

export const CaptionColumn = ({ caption, value, oneLine }) => (
  <>
    <div className={styles.caption}>{caption}</div>
    {oneLine ? <div>{value.join(', ')}</div> : value.map((item) => <div key={item}>{item}</div>)}
  </>
);
