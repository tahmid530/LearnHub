const navigation = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Courses",
        path: "/courses",
    },
    {
        name: "Resources",
        children: [
            {
                name: "Blog",
                path: "/blog",
            },
            {
                name: "FAQ",
                path: "/faq",
            },
            {
                name: "Contact",
                path: "/contact",
            },
        ],
    },
];

export default navigation;