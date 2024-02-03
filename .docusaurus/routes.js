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
    component: ComponentCreator('/', '4ad'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e99'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '6ce'),
            routes: [
              {
                path: '/business-docs/intro',
                component: ComponentCreator('/business-docs/intro', '62e'),
                exact: true,
                sidebar: "busDocsSidebar"
              },
              {
                path: '/technical-docs/intro',
                component: ComponentCreator('/technical-docs/intro', '1c6'),
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
