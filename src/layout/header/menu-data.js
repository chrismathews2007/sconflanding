const menu_data = [{
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/",
        active: "active",
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "About",
        link: "/",
        active: "",
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: "Conferences",
        link: "/",
        active: "",
        sub_menus: [
            { link: "/women", title: "Women" },
            { link: "/", title: "Health" },
            { link: "/", title: "Technology" },
            { link: "/", title: "Science" },
        ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "FAQ",
        link: "/",
        active: "",
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact",
        link: "/",
        active: "",
    }
];
export default menu_data;