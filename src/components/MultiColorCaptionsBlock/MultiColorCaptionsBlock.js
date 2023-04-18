import React from 'react';
import styles from './multiColorCaptions.modules.css';

const MultiColorCaptionsBlock = ({ props }) => (
  <div className={styles.section}>
    {props.map(({ caption, text }) => (
      <div className={styles.item} key={caption}>
        <div className={styles.caption}>{caption}</div>
        <div className={styles.text}>{text}</div>
      </div>
    ))}
  </div>
);

export default MultiColorCaptionsBlock;
