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

  onBrokenLinks: 'throw',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
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
          sidebarId: 'communitySidebar',
          position: 'left',
          html: '<i class="fas fa-users"></i> קהילה',
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
          href: 'https://cloud.ims-network.net',
          html: '<i class="fas fa-server"></i> פלטפורמת ענן',
          position: 'right',
        },
        {
          href: 'https://גיימינג.ישראל',
          html: '<i class="fas fa-gamepad"></i> איגוד הגיימינג הישראלי', 
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
