const dotenv = require("dotenv");
dotenv.config();
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MPH Digital Documentation",
  tagline: "Platform documentation and team resources",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: process.env.WIKI_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.WIKI_BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORGANIZATION_NAME, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME, // Usually your repo name.
  deploymentBranch: process.env.CURRENT_BRANCH,
  trailingSlash: false,
  noIndex: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        // blog: {
        //showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //},
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        style: "dark",
        //title: "mph.digital",
        logo: {
          alt: "MPH Digital",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "techDocsSidebar",
            position: "left",
            label: "Technical Documentation",
          },
          {
            type: "docSidebar",
            sidebarId: "busDocsSidebar",
            position: "left",
            label: "Business Documentation",
          },
          {
            href: "https://github.com/MPH-Digital",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Technical Docs",
        //         to: "/docs/category/technical-docs",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} MPH Digital.`,
      },
      prism: {
        theme: prismThemes.okaidia,
        darkTheme: prismThemes.okaidia,
      },
    }),
};

export default config;
