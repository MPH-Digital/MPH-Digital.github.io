import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b42'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f9b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b3f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2bf'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8f6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8e1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a1a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'af8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e00'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '103'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a90'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a15'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '248'),
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
    component: ComponentCreator('/', '4f8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
