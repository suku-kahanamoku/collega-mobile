import React, { createContext, ReactNode } from "react";
import { RelativePathString, usePathname, useRouter } from "expo-router";

import { IMenu } from "@/types/menu.interface";
import config from "@/route.config.json";

interface IRouteContextProps {
  menuList: Record<string, IMenu>;
  menus: IMenu[];
  activeMenu: IMenu;
  navigate: (href: RelativePathString) => void;
  replace: (href: RelativePathString) => void;
}

export const RouteContext = createContext<IRouteContextProps | undefined>(
  undefined
);

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Vsechna existujici menu
   */
  const menuList: Record<keyof typeof config, IMenu> = config as Record<
    keyof typeof config,
    IMenu
  >;

  /**
   * Provede resolve na jednotlivych menu polozkach
   */
  for (const menu of Object.values(menuList)) {
    // Vlozi potomky do rodicu (vytvori strom)
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
    (menu) => !menu.parentSyscode && menu.group !== "system"
  );

  /**
   * Aktivni menu
   */
  const activeMenu =
    Object.values(menuList).find((menu) => {
      // Exact match first
      if (menu.href === pathname) {
        return true;
      }
      // Dynamic segment match
      const regex = new RegExp(`^${menu.href.replace(/\[.*?\]/g, "[^/]+")}$`);
      return regex.test(pathname);
    }) || menuList[404];

  // Prida active
  activeMenu.active = true;

  // Define navigate function
  const navigate = (href: RelativePathString) => {
    router.push(href);
  };

  // Define navigate function
  const replace = (href: RelativePathString) => {
    router.replace(href);
  };

  return (
    <RouteContext.Provider
      value={{
        menuList,
        menus,
        activeMenu,
        navigate,
        replace,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
