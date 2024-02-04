import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bf2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '79f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '33c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c47'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e1d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ee2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0a0'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '2f5'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b39'),
            routes: [
              {
                path: '/business-docs/intro',
                component: ComponentCreator('/business-docs/intro', '62e'),
                exact: true,
                sidebar: "busDocsSidebar"
              },
              {
                path: '/design-docs/intro',
                component: ComponentCreator('/design-docs/intro', '7a0'),
                exact: true,
                sidebar: "designDocsSidebar"
              },
              {
                path: '/team/intro',
                component: ComponentCreator('/team/intro', '2ed'),
                exact: true,
                sidebar: "teamSidebar"
              },
              {
                path: '/technical-docs/bubble/database',
                component: ComponentCreator('/technical-docs/bubble/database', '857'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/plugins',
                component: ComponentCreator('/technical-docs/bubble/plugins', '06b'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/plugins/custom-plugins/mailgun',
                component: ComponentCreator('/technical-docs/bubble/plugins/custom-plugins/mailgun', 'b17'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/plugins/custom-plugins/map-king',
                component: ComponentCreator('/technical-docs/bubble/plugins/custom-plugins/map-king', 'cf4'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/plugins/custom-plugins/spotlight',
                component: ComponentCreator('/technical-docs/bubble/plugins/custom-plugins/spotlight', '7ee'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/security',
                component: ComponentCreator('/technical-docs/bubble/security', '9cf'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/bubble/workflows',
                component: ComponentCreator('/technical-docs/bubble/workflows', '8d1'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/environments',
                component: ComponentCreator('/technical-docs/environments', '819'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/intro',
                component: ComponentCreator('/technical-docs/intro', '71f'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/mapbox/mapbox-intro',
                component: ComponentCreator('/technical-docs/mapbox/mapbox-intro', 'dbe'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/notifications/marketing-email',
                component: ComponentCreator('/technical-docs/notifications/marketing-email', '6d2'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/notifications/sms',
                component: ComponentCreator('/technical-docs/notifications/sms', '80c'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/notifications/system-email',
                component: ComponentCreator('/technical-docs/notifications/system-email', 'b80'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/notifications/whatsapp',
                component: ComponentCreator('/technical-docs/notifications/whatsapp', 'dac'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/process/bubble-process',
                component: ComponentCreator('/technical-docs/process/bubble-process', 'df3'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/process/plugin-process',
                component: ComponentCreator('/technical-docs/process/plugin-process', 'd7f'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/process/qa-process',
                component: ComponentCreator('/technical-docs/process/qa-process', '8e0'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/technical-docs/reporting',
                component: ComponentCreator('/technical-docs/reporting', '004'),
                exact: true,
                sidebar: "techDocsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
