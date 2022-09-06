module.exports = {
    base: "/docs/",
    title: "星辰大海",
    description: "我成为某个人，某间，点着油灯的陋室，而这陋室冰凉的屋顶，被群星的亿万只脚踩成祭坛，我像一个领取圣餐的孩子，放大了胆子，但屏住呼吸。",
    theme: 'reco',
    // 创建了一个meta标签
    head: [
        ['meta', { name: 'author', content: '星辰大海的博客' }],
        ['meta', { name: 'keywords', content: 'vuepress介绍 vuepress说明，星辰大海的博客' }]
    ],
    // 博客配置
    themeConfig: {
        // 左上角logo
        logo: '/assets/img/touxiang.png',
        type: 'blog',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '標簽'      // 默认文案 “标签”
            },
            // 分類
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分類' // 默认文案 “分类”
            },

            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },
        // 時間軸
        nav: [
            { text: "首頁", link: "/", icon: "reco-home" },
            {
                text: "分類", icon: "reco-category",
                items: [
                    {
                        text: "HTML5",
                        link: "/pages/HTML5/html5"
                    },
                    {
                        text: "CSS3",
                        link: "/pages/CSS3/css3"
                    },
                ]
            },
            {
                text: "項目", icon: "reco-category",
                items: [
                    {
                        text: "項目一",
                        link: "/"
                    },
                    {
                        text: "項目二",
                        link: "/"
                    },
                    {
                        text: "項目三",
                        link: "/"
                    }
                ]
            },
            {
                text: "工具箱",
                icon: "/assets/img/niuyouguo.png",
                items: [
                    { text: "在线PS", link: "https://www.uupoop.com/" },
                    { text: "奶牛快传", link: "https://cowtransfer.com/" },
                    { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            {
                text: "关于", icon: "reco-message",
                items: [
                    {
                        text: "GitHub",
                        link: "https://github.com/mlb123456",
                        icon: "reco-github",
                    },
                    {
                        text: "Gitee",
                        link: "https://gitee.com/mabobo123",
                        icon: "reco-mayun",
                    },
                ]
            }
        ],
        authorAvatar: '/assets/img/touxiang.png', //设置首页右侧信息栏头像
        // 友情链接
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "/assets/img/niuyouguo.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                logo: '/assets/img/niuyouguo.png',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ],
        // 留言板
        valineConfig: {
            appId: '39PXHFwCmvn8ItMgAgnemxNJ-gzGzoHsz',// your appId
            appKey: '435FMrQ9VQY5rGV8KaE8mNIc', // your appKey
            placeholder: '填写邮箱地址可以及时收到回复噢...',
            avatar: 'wavatar', // 访客留言的头像展示
            visitor: true, //文章访问量统计
        }
    }
}