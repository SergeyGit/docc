import React from 'react';
import styles from './textBlock.module.css';
import Translate from '@docusaurus/Translate';

export const TextBlock = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.text}>
          <Translate id="homepage.home_text" description="text on homepage">
            Tranzzo має різноманітний набір платіжних продуктів. Щоби вам було простіше обрати серед
            них потрібні рішення та швидше підключитися, ми зібрали їх у готові бізнес-кейси.
          </Translate>
        </div>
      </div>
    </section>
  );
};
