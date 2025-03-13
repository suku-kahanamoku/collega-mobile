import React, { createContext, ReactNode } from "react";
import { usePathname } from "expo-router";

import { IMenu } from "../type";

interface RouteContextProps {
  menuList: Record<string, IMenu>;
  menus: IMenu[];
  activeMenu: IMenu;
}

export const RouteContext = createContext<RouteContextProps | undefined>(
  undefined
);

interface RouterProviderProps {
  children: ReactNode;
  menuList: Record<string, IMenu>;
}

export const RouterProvider = ({ children, menuList }: RouterProviderProps) => {
  const pathname = usePathname();

  /**
   * Vlozi potomky do rodicu (vytvori strom)
   */
  for (const menu of Object.values(menuList)) {
    const parentMenu = menuList[menu.parentSyscode!];
    if (parentMenu) {
      parentMenu.children = parentMenu.children || [];
      parentMenu.children.push(menu);
    }
  }

  /**
   * Menus, ktera maji byt videt v navigaci
   */
  const menus: IMenu[] = Object.values(menuList).filter(
    (menu) => !menu.parentSyscode
  );

  /**
   * Aktivni menu
   */
  const activeMenu =
    menus.find((menu) => {
      const regex = new RegExp(`^${menu.href.replace(/\[.*?\]/g, ".*")}$`);
      return regex.test(pathname);
    }) || menuList.dashboard;

  // Prida active
  activeMenu.active = true;

  return (
    <RouteContext.Provider
      value={{
        menuList,
        menus: menus.filter(
          (menu) => !["404", "settings"].includes(menu.syscode)
        ),
        activeMenu,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
