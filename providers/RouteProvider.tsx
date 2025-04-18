import React, { createContext, ReactNode } from "react";
import { RelativePathString, usePathname, useRouter } from "expo-router";

import { IMenu } from "@/types/menu.interface";
import { useLang } from "@/modules/Lang/hooks/useLang";

interface IRouteContextProps {
  menuList: Record<string, IMenu>;
  menus: IMenu[];
  activeMenu: IMenu;
  navigate: (href: RelativePathString) => void;
}

export const RouteContext = createContext<IRouteContextProps | undefined>(
  undefined
);

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Vsechna existujici menu
   */
  const menuList: Record<string, IMenu> = {
    404: {
      syscode: "404",
      name: "+not-found",
      title: t("404.title"),
      href: "/not-found" as RelativePathString,
      group: "system",
    },
    login: {
      syscode: "login",
      name: "login",
      title: t("login.title"),
      href: "/login" as RelativePathString,
      group: "system",
    },
    signup: {
      syscode: "signup",
      name: "signup",
      title: t("signup.title"),
      href: "/signup" as RelativePathString,
      group: "system",
    },
    reset_password: {
      syscode: "reset_password",
      name: "reset-password",
      title: t("forgot_password.title"),
      href: "/reset-password" as RelativePathString,
      group: "system",
    },
    settings: {
      syscode: "settings",
      name: "settings",
      title: t("settings.title"),
      href: "/settings" as RelativePathString,
      icon: "settings",
      group: "system",
    },
    dashboard: {
      syscode: "dashboard",
      name: "index",
      title: t("dashboard.title"),
      href: "/" as RelativePathString,
      icon: "dashboard",
    },
    users: {
      syscode: "users",
      name: "users",
      title: t("users.title"),
      href: "/users" as RelativePathString,
      icon: "list-alt",
    },
    user: {
      syscode: "user",
      name: "users/[id]",
      title: t("user.title"),
      href: "/users/[id]" as RelativePathString,
      icon: "person",
      parentSyscode: "users",
    },
    contracts: {
      syscode: "contracts",
      name: "contracts",
      title: t("contracts.title"),
      href: "/contracts" as RelativePathString,
      icon: "list-alt",
    },
    contracts_filter: {
      syscode: "contracts_filter",
      name: "contracts/filter",
      title: t("global.filter"),
      href: "/contracts/filter" as RelativePathString,
      icon: "filter-alt",
      parentSyscode: "contracts",
    },
    contract: {
      syscode: "contract",
      name: "contracts/[id]",
      title: t("contract.title"),
      href: "/contracts/[id]" as RelativePathString,
      icon: "description",
      parentSyscode: "contracts",
    },
  };

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
    }) || menuList.dashboard;

  // Prida active
  activeMenu.active = true;

  // Define navigate function
  const navigate = (href: RelativePathString) => {
    router.push(href);
  };

  return (
    <RouteContext.Provider
      value={{
        menuList,
        menus,
        activeMenu,
        navigate,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
