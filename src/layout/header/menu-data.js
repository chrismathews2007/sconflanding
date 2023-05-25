const menu_data = [{
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "All Categories",
        link: "/",
        active: "active",
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "Hot Offers",
        link: "/",
        active: "",
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: "Projects",
        link: "/",
        active: "",
        sub_menus: [
            { link: "/", title: "Women" },
            { link: "/", title: "Health" },
            { link: "/", title: "Technology" },
            { link: "/", title: "Science" },
        ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Menu Item",
        link: "/",
        active: "",
    }
];
export default menu_data;