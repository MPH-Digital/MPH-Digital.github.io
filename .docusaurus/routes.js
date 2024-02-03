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
    path: '/blog',
    component: ComponentCreator('/blog', '1c5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4a0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '1ea'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '1bb'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8d2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ac9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '04a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '287'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'cf9'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b1e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'f93'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f2e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '078'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'abb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'eb3'),
            routes: [
              {
                path: '/docs/category/technical-docs',
                component: ComponentCreator('/docs/category/technical-docs', 'f45'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'c6b'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/congratulations',
                component: ComponentCreator('/docs/technical_docs/congratulations', '13c'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/create-a-blog-post',
                component: ComponentCreator('/docs/technical_docs/create-a-blog-post', '8c7'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/create-a-document',
                component: ComponentCreator('/docs/technical_docs/create-a-document', 'e20'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/create-a-page',
                component: ComponentCreator('/docs/technical_docs/create-a-page', '1ad'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/deploy-your-site',
                component: ComponentCreator('/docs/technical_docs/deploy-your-site', '7f7'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/technical_docs/markdown-features',
                component: ComponentCreator('/docs/technical_docs/markdown-features', '97a'),
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
    path: '/',
    component: ComponentCreator('/', 'ee2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
