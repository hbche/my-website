// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const siteConfig = {
  themeConfig: {
    prism: {
      additionalLanguages: ['bash', 'diff', 'json'],
    },
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小车的小书屋',
  tagline: '不积跬步,无以至千里.不积小流,无以成江河.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hbche.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hanbin.che', // 拥有部署仓库的用户
  projectName: 'my-website', // 部署仓库的名字
  deploymentBranch: 'gh-pages', // 部署分支的名字 默认 gh-pages
  trailingSlash: false, // GitHub Pages 默认会在 Docusaurus 网址链接添加默认斜杠

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    // ['@docusaurus/preset-classic',
    //   {
    //     theme: {
    //       customCss: [require.resolve('./src/css/custom.css')]
    //     }
    //   }],
    [
      'classic',
      {
        blog: {
          // 博客内容目录的文件系统路径，相对于站点目录。
          path: 'blog',
          // 编辑文档的基础 URL。 The final URL is computed by editUrl + relativePostPath.使用函数可以允许你更精细地控制每一个文件。 完全忽略这个变量就会禁用编辑链接。
          // editUrl: '',
          // 是否展示阅读时间
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          // 博客侧边栏标题
          blogSidebarTitle: '近期博客',
          // 博客侧边栏展示的标题数，默认5个；如果是'ALL'，则侧边栏标题分页不可用且不展示侧边栏
          blogSidebarCount: 'ALL',
          editLocalizedFiles: false,
          // 用于增进 SEO 的博客页面标题。
          blogTitle: 'Blog title',
          // 用于增进 SEO 的博客页面元描述。
          blogDescription: 'Blog',
          // 站点博客部分的 URL 前缀。
          routeBasePath: 'blog',
          // 相对于内容路径的 glob 模式列表，匹配到的 Markdown 文件会被构建。
          include: ['**/*.{md,mdx}'],
          // Glob 模式列表，匹配到的 Markdown 文件会被排除。
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          // 每个博文列表页面显示的博文数量。
          postsPerPage: 5,
          // 博客列表页的根组件。
          blogListComponent: '@theme/BlogListPage',
          // 每个博文页面的根组件。
          blogPostComponent: '@theme/BlogPostPage',
          // 标签列表页的根组件。
          blogTagsListComponent: '@theme/BlogTagsListPage',
          // 「包含某标签的所有博文」页面的根组件。
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          // 传递给 MDX 的 Remark 插件。
          remarkPlugins: [require('remark-math')],
          // 传递给 MDX 的 Rehype 插件。
          rehypePlugins: [],
          // 在 Docusaurus 默认 Remark 插件之前传递给 MDX 的自定义 Remark 插件。
          beforeDefaultRemarkPlugins: [],
          // 在 Docusaurus 默认 Rehype 插件之前传递给 MDX 的自定义 Rehype 插件。
          beforeDefaultRehypePlugins: [],
          // 标明摘要结束处的标记。
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          // 博客订阅源。
          // feedOptions: {
          //   type: '',
          //   title: '',
          //   description: '',
          //   copyright: '',
          //   language: undefined,
          //   createFeedItems: async (params) => {
          //     const { blogPosts, defaultCreateFeedItems, ...rest } = params;
          //     return defaultCreateFeedItems({
          //       // keep only the 10 most recent blog posts in the feed
          //       blogPosts: blogPosts.filter((item, index) => index < 10),
          //       ...rest,
          //     });
          //   },
          // },
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial/zustand',
        routeBasePath: 'zustand',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'wiki/frontend',
        routeBasePath: 'frontend',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backend',
        path: 'wiki/backend',
        routeBasePath: 'backend',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'database',
        path: 'wiki/database',
        routeBasePath: 'database',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'embedded',
        path: 'wiki/embedded',
        routeBasePath: 'embedded',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devops',
        path: 'wiki/devops',
        routeBasePath: 'devops',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorithm',
        path: 'wiki/algorithm',
        routeBasePath: 'algorithm',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roadmap',
        path: 'work/roadmap',
        routeBasePath: 'roadmap',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'journal',
        path: 'journal',
        routeBasePath: 'journal',
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      // 为入口网页添加全局的元数据属性，这些元数据将会被渲染到页面的 `head` 标签里
      metadata: [
        {
          name: 'keywords',
          content: 'hanbin, frontend, react, angular, javascript, css',
        },
      ],
      image: 'img/homepage-bg-main.png',
      navbar: {
        title: '小车的小书屋',
        logo: {
          alt: '小车的小书屋',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '📖 教程',
            position: 'left',
            items: [
              {
                label: 'Zustand学习记录',
                to: '/zustand'
              }
            ]
          },
          { to: '/blog', label: '📄 博客', position: 'left' },
          {
            label: '📚 维基',
            position: 'left',
            items: [
              {
                label: '算法',
                to: '/algorithm',
              },
              {
                label: '前端',
                to: '/frontend',
              },
              {
                label: '服务端',
                to: '/backend',
              },
              {
                label: '数据库',
                to: '/database',
              },
              {
                label: '嵌入式',
                to: '/embedded',
              },
              {
                label: 'DevOps',
                to: '/devops',
              },
            ],
          },
          {
            position: 'left',
            label: '👨‍💻 职业',
            items: [
              {
                label: '求职之路',
                to: '/roadmap',
              },
            ],
          },
          { to: '/journal', label: '📽️ 日志', position: 'left' },
          // 国际化
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/hbche/my-website/tree/main',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} hbche, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        defaultLanguage: 'markdown',
        additionalLanguages: ['bash', 'diff', 'json'],
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
