import React from 'react';
import clsx from "clsx";
import styles from "./head.module.css";
import {LinkPrimary} from "../../Links/Links";
import Translate, {translate} from '@docusaurus/Translate';
import Image from "@site/static/img/main-page.svg";

export const HomepageHead = () => {
    return (
        <section className={clsx('hero hero--primary', styles.heroSection)}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.text}>
                    <h1 className={styles.heroTitle}>
                        <Translate
                            id="homepage.zagolovok"
                            description="zagolovok desc"
                        >
                            Те, що потрібно вашому бізнесу
                        </Translate>
                    </h1>
                    <p className="hero__subtitle">
                        <Translate
                            id="homepage.podzagolovok"
                            description="podzagolovok desc"
                        >
                            В залежності від типу вашого бізнесу ми пропонуємо набір сервісів та можливостей, покликаних
                            задовольнити його потреби
                        </Translate>
                    </p>
                    <LinkPrimary path="/docs/intro" title={translate({
                        message: "Детальніше",
                        description: 'The homepage link',
                    })}/>
                </div>
                <div className={styles.imageWrap}>
                    <Image className={styles.image}/>
                </div>
            </div>
        </section>
    );
}
