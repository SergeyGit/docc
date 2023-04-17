import React from 'react';
import clsx from 'clsx';
import styles from './footer.module.css';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', styles.footer, {
        'footer--dark': style === 'dark',
      })}
    >
      <div className={styles.head}>
        <div className="container">
          <div className="row row--align-center">
            <div className={styles.logo}>{logo}</div>
            <div className="col">{copyright}</div>
          </div>
        </div>
      </div>
      <div className="container">{links}</div>
    </footer>
  );
}
