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
    component: ComponentCreator('/', '154'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f89'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '43f'),
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
              },
              {
                path: '/technical-docs/markdown-features',
                component: ComponentCreator('/technical-docs/markdown-features', '1da'),
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
