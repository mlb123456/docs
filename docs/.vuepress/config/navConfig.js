module.exports = [
    { text: "首页", link: "/", icon: "reco-home" },
    {
        text: "分类", icon: "reco-category",
        items: [
            {
                text: "Vue2.0", link: "/pages/VUE2.0/"
            },
        ]
    },
    {
        text: "文档",
        icon: "reco-document",
        items: [
            { text: "React.js中文文档", link: "https://zh-hans.reactjs.org/" },
            { text: "Element ui文档", link: "https://element.eleme.cn/#/zh-CN" },
            { text: "微信小程序", link: "https://developers.weixin.qq.com/miniprogram/dev/framework/" },
            { text: "Node.js中文文档", link: "http://nodejs.cn/learn" },
            { text: "Git中文教程", link: "https://git-scm.com/book/zh/v2" }
        ]
    },
    {
        text: "工具箱",
        icon: "icon-gongju",
        items: [
            { text: "菜鸟教程", link: "https://www.runoob.com/" },
            { text: "在线PS", link: "https://www.uupoop.com/" },
            { text: "奶牛快传", link: "https://cowtransfer.com/" },
            { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
            { text: "在线接口测试", link: "https://www.fly63.com/php/http/" }
        ]
    },
    // 时间轴
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
    },
    // {
    //     text: "项目", icon: "reco-category",
    //     items: [
    //         {
    //             text: "项目一",
    //             link: "/"
    //         },
    //         {
    //             text: "项目二",
    //             link: "/"
    //         },
    //         {
    //             text: "项目三",
    //             link: "/"
    //         }
    //     ]
    // },
]