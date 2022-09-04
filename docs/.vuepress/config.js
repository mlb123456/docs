module.exports = {
    base: "/docs/",
    title: "马立博的博客",
    description: "个人博客",
    // 创建了一个meta标签
    head: [
        ['meta', { name: 'author', content: '马立博的博客' }],
        ['meta', { name: 'keywords', content: 'vuepress介绍 vuepress说明，马立博的博客' }]
    ],
    // 主题配置
    themeConfig: {
        // 左上角logo
        logo: '/assets/img/logo.png',
        // 导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'about', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        // 侧边栏
        sidebar: [
            '',
            'about',
            'about1'
        ]
    }
}