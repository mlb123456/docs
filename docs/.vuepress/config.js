module.exports = {
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