const navConfig = require('./config/navConfig');
const sidebarConfig = require('./config/sidebarConfig')

module.exports = {
    base: "/docs/",
    title: "星辰大海",
    description: "日月星辰，山川大海",
    theme: 'reco',
    // 创建了一个meta标签
    head: [
        ['link', { rel: 'icon', href: 'icon-mianxingniuyouguo' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: '星辰大海的博客' }],
        ['meta', { name: 'keywords', content: 'vuepress介绍 vuepress说明，星辰大海的博客' }]
    ],
    // 博客配置
    themeConfig: {
        // 左上角logo
        logo: '/assets/img/touxiang.png',
        type: 'blog',
        huawei: true, //华为文案
        author: "山川大海",
        smoothScroll: false, // 页面滚动效果 
        nextLinks: true,// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        prevLinks: true,// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            // 分類
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },

            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },
        // 导航栏
        nav: navConfig,
        // 侧边栏
        sidebar: sidebarConfig,

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