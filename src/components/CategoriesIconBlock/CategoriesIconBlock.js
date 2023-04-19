import React from 'react';
import Link from '@docusaurus/Link';
import styles from './categories.module.css';
import Fast from './img/Fast.svg';
import Devices from './img/Devices.svg';
import Cards from './img/Cards.svg';
import Stop from './img/Stop.svg';
import Checkout from './img/Checkout.svg';
import Education from './img/Education.svg';
import { translate } from '@docusaurus/Translate';

const mock = [
  {
    title: translate({
      id: 'doc.category-1',
      message: 'Початок роботи',
    }),
    icon: Fast,
    url: '/docs/intro',
  },
  {
    title: translate({
      id: 'doc.category-2',
      message: 'Online payments',
    }),
    icon: Devices,
    url: '/docs/intro',
  },
  {
    title: translate({
      id: 'doc.category-3',
      message: 'Payment methods',
    }),
    icon: Cards,
    url: '/docs/intro',
  },
  {
    title: translate({
      id: 'doc.category-4',
      message: 'Risk management',
    }),
    icon: Stop,
    url: '/docs/intro',
  },
  {
    title: translate({
      id: 'doc.category-5',
      message: 'Checkouts',
    }),
    icon: Checkout,
    url: '/docs/intro',
  },
  {
    title: translate({
      id: 'doc.category-6',
      message: 'Merchant portal',
    }),
    icon: Education,
    url: '/docs/intro',
  },
];

const Block = ({ Image, title, link }) => (
  <div key={title} className="col col--6">
    <Link to={link} className={styles.link}>
      <Image />
      <div>{title}</div>
    </Link>
  </div>
);

const CategoriesIconBlock = () => (
  <div className="row">
    {mock.map(({ title, icon, url }) => (
      <Block Image={icon} title={title} link={url} key={title} />
    ))}
  </div>
);

export default CategoriesIconBlock;
