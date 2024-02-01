import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', 'a29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', 'd15'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', 'a66'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', 'c7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd2e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '252'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '89f'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '66a'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '9c2'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '639'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', 'ec0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', '5a2'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'bb2'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', 'e93'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', '802'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', 'cbc'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', '87a'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', '922'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '44d'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '79e'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '007'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'e45'),
            routes: [
              {
                path: '/docs/category/environments/',
                component: ComponentCreator('/docs/category/environments/', '314'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/category/tutorial---extras/',
                component: ComponentCreator('/docs/category/tutorial---extras/', '22a'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'f9b'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/congratulations/',
                component: ComponentCreator('/docs/technical-docs/congratulations/', 'bcf'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/create-a-blog-post/',
                component: ComponentCreator('/docs/technical-docs/create-a-blog-post/', '360'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/create-a-document/',
                component: ComponentCreator('/docs/technical-docs/create-a-document/', 'b6f'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/create-a-page/',
                component: ComponentCreator('/docs/technical-docs/create-a-page/', '9ec'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/deploy-your-site/',
                component: ComponentCreator('/docs/technical-docs/deploy-your-site/', '997'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/technical-docs/markdown-features/',
                component: ComponentCreator('/docs/technical-docs/markdown-features/', '9d4'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions/', '664'),
                exact: true,
                sidebar: "techSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site/', 'c49'),
                exact: true,
                sidebar: "techSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8a3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
