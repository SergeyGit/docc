import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './cardsCategoriesBlock.module.css';

const CardsCategoriesBlock = ({ props }) => (
  <div className={clsx(styles.section, 'row')}>
    {props.map(({ link, caption, text, col = 6 }) => (
      <div className={clsx(styles.item, `col col--${col}`)} key={caption}>
        <Link to={link} className={styles.link}>
          <div className={styles.caption}>{caption}</div>
          <div>{text}</div>
        </Link>
      </div>
    ))}
  </div>
);

export default CardsCategoriesBlock;
