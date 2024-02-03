import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
