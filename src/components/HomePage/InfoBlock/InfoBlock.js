import React from 'react';
import styles from './infoBlock.module.css';
import Translate from '@docusaurus/Translate';
import Icon1 from './img/Document.svg';
import Icon2 from './img/Organization.svg';
import Icon3 from './img/Flexible-settings.svg';

export const InfoBlock = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.caption}>
          <Translate id="homepage.home_info_caption" description="caption on info block">
            В кожному кейсі вас чекає така інформація:
          </Translate>
        </div>
        <div className={styles.repeatable}>
          <div className={styles.repeatableItemWrap}>
            <div className={styles.repeatableItem}>
              <Icon1 />
              <div className={styles.repeatableItemText}>
                <Translate
                  id="homepage.home_info_repeat1"
                  description="caption on repeatable info block 1"
                >
                  Набір рішень та опис можливостей
                </Translate>
              </div>
            </div>
          </div>
          <div className={styles.repeatableItemWrap}>
            <div className={styles.repeatableItem}>
              <Icon2 />
              <div className={styles.repeatableItemText}>
                <Translate
                  id="homepage.home_info_repeat2"
                  description="caption on repeatable info block 2"
                >
                  Опис процесу взаємодії для вашого клієнта
                </Translate>
              </div>
            </div>
          </div>
          <div className={styles.repeatableItemWrap}>
            <div className={styles.repeatableItem}>
              <Icon3 />
              <div className={styles.repeatableItemText}>
                <Translate
                  id="homepage.home_info_repeat3"
                  description="caption on repeatable info block 3"
                >
                  Cхема взаємодії з Tranzzo
                </Translate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
