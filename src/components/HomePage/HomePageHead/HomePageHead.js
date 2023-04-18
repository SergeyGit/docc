import React from 'react';
`import clsx from 'clsx';`;
import styles from './head.module.css';
import { LinkPrimary } from '../../Links/Links';
import Translate, { translate } from '@docusaurus/Translate';
import Image from '@site/static/img/main-page.svg';

export const HomepageHead = () => {
  return (
    <section className={clsx('hero hero--primary', styles.heroSection)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.text}>
          <div className={styles.heroTitle}>
            <Translate id="homepage.zagolovok" description="zagolovok desc">
              Готові рішення для різних сфер бізнесу
            </Translate>
          </div>
          <p className={styles.subtitle}>
            <Translate id="homepage.podzagolovok" description="podzagolovok desc">
              Оберіть потрібну сферу бізнесу та дізнайтеся про можливості для вас та ваших клієнтів
            </Translate>
          </p>
          <LinkPrimary
            path="/docs/intro"
            title={translate({
              message: 'Детальніше',
              description: 'The homepage link',
            })}
          />
        </div>
        <div className={styles.imageWrap}>
          <Image className={styles.image} />
        </div>
      </div>
    </section>
  );
};
