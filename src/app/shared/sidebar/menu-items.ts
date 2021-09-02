import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboards",
    icon: "icon-speedometer",
    class: "has-arrow",
    label: "2",
    labelClass: "side-badge badge badge-pill text-white badge-danger",
    extralink: false,
    submenu: [
      {
        path: "/dashboard/dashboard1",
        title: "Página Principal",
        icon: "mdi mdi-adjust",
        class: "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/dashboard/dashboard2",
        title: "Vehículo(s)",
        icon: "mdi mdi-adjust",
        class: "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: [],
      },
    ],
  },
];
