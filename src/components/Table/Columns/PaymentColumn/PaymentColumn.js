import React from 'react';
import styles from './payment.module.css';
import { PaymentIcons } from './icons';

export const PaymentColumn = ({ name, method }) => (
  <div className={styles.wrap}>
    <div className={styles.icon} style={{ backgroundImage: `url(${PaymentIcons[name]})` }} />
    <div>
      <div className={styles.caption}>{name}</div>
      {method[0]}
    </div>
  </div>
);
