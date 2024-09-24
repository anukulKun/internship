export const icons = {
    logo: "/logo.svg",
    profile: "/profile.png",
    gridType: {
        list: {
            light: "/listLight.svg",
            dark: "/listDark.svg"
        },
        appGrid: {
            light: "/appGridLight.svg",
            dark: "/appGridDark.svg"
        },
    },
    assign: {
        light: "/assignLight.svg",
        dark: "/assignDark.svg"
    },
    bell: {
        light: "/bellLight.svg",
        dark: "/bellDark.svg"
    },
    calendar: {
        light: "/calendarLight.svg",
        dark: "/calendarDark.svg"
    },
    carbonPlan: {
        light: "/carbon_planLight.svg",
        dark: "/carbon_planDark.svg"
    },
    themeMode: {
        light: "/themeLight.svg",
        dark: "/themeDark.svg"
    },
    info: "/info.svg",
    menu: {
        light: "/menuLight.svg",
        dark: "/menuDark.svg"
    },
    repeat: {
        light: "/repeatLight.svg",
        dark: "/repeatDark.svg"
    },
    search: {
        light: "/searchLight.svg",
        dark: "/searchDark.svg"
    },
    star: {
        filled: {
            light: "/starFilledLight.svg",
            dark: "/starFilledDark.svg"
        },
        outline: {
            light: "/starLight.svg",
            dark: "/starDark.svg"
        }
    },
    sum: {
        light: "/sumLight.svg",
        dark: "/sumDark.svg"
    },
    task: {
        light: "/taskLight.svg",
        dark: "/taskDark.svg"
    },
    caretDown: {
        light: "/caretDownLight.svg",
        dark: "/caretDownDark.svg"
    },
    cross: {
        light: "/crossLight.svg",
        dark: "/crossDark.svg"
    },
    delete: {
        light: "/deleteLight.svg",
        dark: "/deleteDark.svg"
    },
};

export const sideBarRouteItems = [
    {
        title: "All Tasks",
        iconUrl: {
            light: icons.task.light,
            dark: icons.task.dark
        },
        route: "/all-tasks"
    },
    {
        title: "Today",
        iconUrl: {
            light: icons.calendar.light,
            dark: icons.calendar.dark
        },
        route: "/today-tasks"
    },
    {
        title: "Important",
        iconUrl: {
            light: icons.star.outline.light,
            dark: icons.star.outline.dark
        },
        route: "/important-tasks"
    },
    {
        title: "Planned",
        iconUrl: {
            light: icons.carbonPlan.light,
            dark: icons.carbonPlan.dark
        },
        route: "/planned-tasks"
    },
    {
        title: "Assigned to me",
        iconUrl: {
            light: icons.assign.light,
            dark: icons.assign.dark
        },
        route: "/assigned-tasks"
    },
];

export const TodayTodoNavIcons = [
    icons.bell,
    icons.repeat,
    icons.calendar
];