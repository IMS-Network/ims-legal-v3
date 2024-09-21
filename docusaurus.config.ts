import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IMS - Legal',
  tagline: 'פורטל המדיניות של חברת איי.אמ.אס טכנולוגיות',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://legal.ims-network.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ims-network', // Usually your GitHub org/user name.
  projectName: 'ims-legal-v3', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },

  scripts: [
    // Adding Formbricks Surveys script
    {
      src: 'https://forms.ims-network.net/api/packages/website',
      async: true,
      onload: `!function(){
        var apiHost = "https://forms.ims-network.net";
        var environmentId = "clzu4mqmi000ijh81k2lxn9j1";
        setTimeout(function(){
          window.formbricks.init({ environmentId: environmentId, apiHost: apiHost });
        }, 500);
      }();`,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/library',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ims-legal-seo-back.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IMS - Legal',
      logo: {
        alt: 'IMS - Legal',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'privacySidebar',
          position: 'left',
          html: '<i class="fas fa-user-shield"></i> פרטיות',
        },
        {
          type: 'docSidebar',
          sidebarId: 'securitySidebar',
          position: 'left',
          html: '<i class="fas fa-lock"></i> אבטחה',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tosSidebar',
          position: 'left',
          html: '<i class="fas fa-file-contract"></i> תנאים והגבלות',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloudSidebar',
          position: 'left',
          html: '<i class="fas fa-cloud"></i> הענן שלנו',
        },
        {
          type: 'docSidebar',
          sidebarId: 'isoSidebar',
          position: 'left',
          html: '<i class="fas fa-certificate"></i> תקנים',
        },
        {
          type: 'docSidebar',
          sidebarId: 'companySidebar',
          position: 'left',
          html: '<i class="fas fa-users"></i> חברה',
        },
        {
          href: 'https://ims-network.org/contact',
          html: '<i class="fas fa-envelope"></i> צור קשר',
          position: 'left',
        },
        {
          href: 'https://ims-network.org',
          html: '<i class="fas fa-info-circle"></i> אודות החברה',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'dropdown',
          html: '<i class="fas fa-box"></i> מוצרים',
          position: 'right',
          items: [
            {
              href: 'https://cloud.ims-network.net',
              html: '<i class="fas fa-server"></i> פלטפורמת ענן',
            },
            {
              href: 'https://גיימינג.ישראל',
              html: '<i class="fas fa-gamepad"></i> איגוד הגיימינג הישראלי', 
            },
            {
              href: 'https://workway.co.il',
              html: '<i class="fas fa-briefcase"></i> המקום לכל משימה',
            },
            {
              href: 'https://discord.ims-network.net',
              html: '<i class="fab fa-discord"></i> דיסקורד',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `.כל הזכויות שמורות לאיי.אמ.אס טכנולוגיות © ${new Date().getFullYear()} \nנוצר ב🇮🇱 עם המון 🥙`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
