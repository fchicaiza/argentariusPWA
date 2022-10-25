import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Argentarius Mobile",
    path: "/argentarius",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Facturación",
    path: "/facturacion",
    icon: <MdIcons.MdReceipt />,
    cName: "nav-text",
  },
  {
    title: "Gestión de productos",
    path: "/productos",
    icon: <IoIcons.IoMdCart />,
    cName: "nav-text",
  },
  {
    title: "Gestión de Clientes",
    path: "/clientes",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Configuración",
    path: "/configuracion",
    icon: <IoIcons.IoMdCog />,
    cName: "nav-text",
  },
  {
    title: "Reportes",
    path: "/reportes",
    icon: <MdIcons.MdAreaChart />,
    cName: "nav-text",
  },
  //   {
  //     title: "Argentarius Mobile",
  //     path: "/",
  //     icon: <AiIcons.AiFillHome />,
  //   },
];
