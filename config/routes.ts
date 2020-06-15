export default [
    {
        path: "/user",
        layout: false,
        routes: [
            {
                name: "login",
                path: "/user/login",
                component: "./user/login",
            },
        ],
    },

    {
        path: "/welcome",
        name: "welcome",
        icon: "smile",
        component: "./Welcome",
    },
    {
        path: "/admin",
        name: "admin",
        icon: "crown",
        access: "canAdmin",
        component: "./Admin",
        routes: [
            {
                path: "/admin/sub-page",
                name: "sub-page",
                icon: "smile",
                component: "./Welcome",
            },
        ],
    },
    // 工具列表
    {
        path: "/list",
        name: "list",
        icon: "table",
        routes: [
            {
                name: "table-list",
                path: "/list/table-list",
                component: "./ListTableList",
            },
            {
                name: "pangu-space",
                path: "/list/pangu-space",
                component: "./PanguSpace",
            },
        ],
    },
    {
        path: "/",
        redirect: "/welcome",
    },
    {
        component: "./404",
    },
];
