// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const LangSwitcher = require('./src/components/LangSwitcher').default;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' ',
  tagline: '',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://subtle-bunny-8697af.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      uk: {
        label: 'Ukraine',
        direction: 'ltr',
        htmlLang: 'uk-UK',
        calendar: 'gregory',
        path: 'uk',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'Tranzzo doc Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
            className: 'search-bar',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'Y1K95ZUEO5',

        // Public API key: it is safe to commit it
        apiKey: 'c2e81862eb6fe0e6a798b7e5becb818a',

        indexName: 'docusaurus tranzzo',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tranzzo',
            items: [
              {
                label: 'Про нас',
                to: '/docs/intro',
              },
              {
                label: "Кар'єра",
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Спільнота',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/tranzzo',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/tranzzo/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/tranzzo/',
              },
              {
                label: 'Блог',
                href: 'https://tranzzo.com/blog',
              },
            ],
          },
          {
            title: 'Контакти',
            items: [
              {
                label: 'Центр підтримки',
                to: '/blog',
              },
              {
                label: 'Відділ продажів',
                to: '/blog',
              },
              {
                label: 'Прес-центр',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Юридичні аспекти',
            items: [
              {
                label: 'Правила та умови',
                to: '/blog',
              },
              {
                label: 'Політика приватності',
                to: '/blog',
              },
              {
                label: 'Політика збору даних',
                to: '/blog',
              },
              {
                label: 'Політика запобігання відмиванню коштів',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: ' ',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
