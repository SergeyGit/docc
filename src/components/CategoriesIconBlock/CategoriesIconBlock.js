import React from 'react';
import Link from '@docusaurus/Link';
import styles from "./categories.module.css";
import Icon1 from './img/Frame.svg';
import Icon2 from './img/Frame-1.svg';
import Icon3 from './img/Frame-2.svg';
import Icon4 from './img/Frame-3.svg';
import Icon5 from './img/Frame-4.svg';
import Icon6 from './img/Frame-5.svg';

const mock = [
    {
        title: 'Початок роботи',
        img: Icon1,
        url: "/docs/intro",
    },
    {
        title: 'Online payments',
        img: Icon2,
        url: "/docs/intro",
    },
    {
        title: 'Online payments',
        img: Icon3,
        url: "/docs/intro",
    },
    {
        title: 'Online payments',
        img: Icon4,
        url: "/docs/intro",
    },
    {
        title: 'Online payments',
        img: Icon5,
        url: "/docs/intro",
    },
    {
        title: 'Online payments',
        img: Icon6,
        url: "/docs/intro",
    },
]

const Block = ({ Image, title, link }) => (
    <Link to={link} className={styles.block}>
        <div className={styles.icon}>
            <Image/>
        </div>
        <h3>{title}</h3>
    </Link>
);

const CategoriesIconBlock = () => (
    <div className={styles.section}>
        {mock.map(({title, img, url}) => (
            <Block
                Image={img}
                title={title}
                link={url}
                key={title}
            />
        ))}
    </div>
);

export default CategoriesIconBlock;
