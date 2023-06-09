import React from 'react';
import Link from '@docusaurus/Link';
import styles from './links.module.css';
import cn from 'clsx';

export const LinkPrimary = ({ path, title, fill = false, classes, linkProps }) => {
  return (
    <Link to={path} className={cn(styles.primary, classes, { [styles.fill]: fill })} {...linkProps}>
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
      </span>
    </Link>
  );
};

export const LinkSecondary = ({ path, title, light = false, classes, linkProps }) => {
  return (
    <Link to={path} className={cn([styles.secondary, classes])} {...linkProps}>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export const ButtonPrimary = ({ title, classes, ...rest }) => {
  return (
    <button className={cn(styles.primaryButton, classes)} {...rest}>
      <div className={styles.contentButton}>{title}</div>
    </button>
  );
};
