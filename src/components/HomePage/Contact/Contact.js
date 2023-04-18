import React from 'react';
import Form from './Form';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './contact.module.css';
import { LinkSecondary } from '../../Links/Links';

export const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <div className={styles.contentCaption}>
            <Translate id="homepage.contact_caption" description="contact caption">
              Не знайшли свою сферу?
            </Translate>
          </div>
          <div className={styles.text}>
            <Translate id="homepage.contact_text" description="contact text">
              Не проблема: напишіть нашій команді підтримки — ми підготуємо індивідуальне рішення
              відповідно до ваших задач.
            </Translate>
          </div>
          <LinkSecondary
            path="/"
            title={translate({
              message: 'Переглянути весь функціонал',
              description: 'Переглянути весь функціонал',
            })}
          />
        </div>
        <Form />
      </div>
    </section>
  );
};
