import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LightIcon from "@site/static/img/icons/colorMode/light.svg";
import LightDocIcon from "@site/static/img/icons/colorMode/light-doc.svg";
import DarkIcon from "@site/static/img/icons/colorMode/dark.svg";
import DarkDocIcon from "@site/static/img/icons/colorMode/dark-doc.svg";

import styles from './styles.module.css';
import cn from 'clsx';

function ColorModeToggle({className, buttonClassName, value, onChange}) {
  const isBrowser = useIsBrowser();
  const {siteConfig} = useDocusaurusContext();
  const isHomepage = isBrowser && location.pathname === siteConfig.baseUrl;
  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    },
  );
  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => onChange('light')}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite">
          {isHomepage ? (
            <LightIcon className={clsx(styles.icon, {
              [styles.colorSvg]: value === 'light'
          })}/>
          ) : (
            <div className={cn(styles.docPageWrap, {
              [styles.active]: value === 'light'
            })}>
              <LightDocIcon className={styles.icon}/>
            </div>
          )}
      </button>
        <button
            className={clsx(
                'clean-btn',
                styles.toggleButton,
                !isBrowser && styles.toggleButtonDisabled,
                buttonClassName,
            )}
            type="button"
            onClick={() => onChange( 'dark' )}
            disabled={!isBrowser}
            title={title}
            aria-label={title}
            aria-live="polite">
            {isHomepage ? ( <DarkIcon className={clsx(styles.icon, {
                [styles.colorSvg]: value === 'dark'
            })}/>
            ) : (
              <div className={cn(styles.docPageWrap, {
                [styles.active]: value === 'dark'
              })}>
                <DarkDocIcon className={styles.icon}/>
              </div>
            )}
        </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
