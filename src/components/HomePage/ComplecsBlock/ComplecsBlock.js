import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './complecsBlock.module.css';
import Icon1 from './img/Image-wrapper.png';
import Icon2 from './img/Image-wrapper-1.png';
import Icon3 from './img/Image-wrapper-2.png';
import Icon4 from './img/Image-wrapper-3.png';
import Icon5 from './img/Image-wrapper-4.png';
import Icon6 from './img/Image-wrapper-5.png';
import { LinkSecondary } from '../../Links/Links';

const complecsSolutions = [
  {
    icon: Icon1,
    caption: translate({
      id: 'homepage.home_complex_providers',
      message: 'Провайдери платіжних послуг ',
    }),
    link: '/docs',
  },
  {
    icon: Icon2,
    caption: translate({
      id: 'homepage.home_complex_microfinance',
      message: 'Мікрофінансові установи',
    }),
    link: '/docs',
  },
  {
    icon: Icon3,
    caption: translate({
      id: 'homepage.home_complex_commercial',
      message: 'Електронна комерція',
    }),
    link: '/docs',
  },
  {
    icon: Icon4,
    caption: translate({
      id: 'homepage.home_complex_marketplaces',
      message: 'Маркетплейси',
    }),
    link: '/docs',
  },
  {
    icon: Icon5,
    caption: translate({
      id: 'homepage.home_complex_services',
      message: 'Сервіси за підпискою',
    }),
    link: '/docs',
  },
  {
    icon: Icon6,
    caption: translate({
      id: 'homepage.home_complex_gaming',
      message: 'iGaming',
    }),
    link: '/docs',
  },
];

export const ComplecsBlock = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.caption}>
          <Translate id="homepage.home_complecs_caption" description="caption on complecs block">
            Комплексні рішення для різних сфер бізнесу
          </Translate>
        </div>
        <div className={styles.repeatable}>
          {complecsSolutions.map(({ link, caption, icon }) => (
            <div className={styles.repeatableItemWrap} key={caption}>
              <div className={styles.repeatableItem}>
                <img src={icon} alt={caption} />
                <div className={styles.repeatableItemText}>{caption}</div>
                <LinkSecondary
                  path={link}
                  title={translate({
                    message: 'Дізнатися більше',
                    description: 'Дізнатися більше',
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
