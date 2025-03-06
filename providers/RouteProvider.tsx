import React, { createContext, useContext, ReactNode } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { RelativePathString, usePathname } from "expo-router";
import { useTranslation } from "react-i18next";

export type IMenu = {
  syscode: string;
  name: string;
  title: string;
  href: RelativePathString;
  active?: boolean;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  children?: IMenu[];
  parentSyscode?: string;
};

interface RouteContextProps {
  menuList: Record<string, IMenu>;
  menus: IMenu[];
  activeMenu: IMenu;
}

const RouteContext = createContext<RouteContextProps | undefined>(undefined);

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("useRoute must be used within a RouteProviderCmp");
  }
  return context;
};

export const RouteProviderCmp = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("$");
  const pathname = usePathname();

  /**
   * Vsechna existujici menu
   */
  const menuList: Record<string, IMenu> = {
    404: {
      syscode: "404",
      name: "+not-found",
      title: t("404.title"),
      href: "/not-found" as RelativePathString,
    },
    settings: {
      syscode: "settings",
      name: "settings",
      title: t("settings.title"),
      href: "/settings" as RelativePathString,
      icon: "cog",
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
      icon: "users",
    },
    user: {
      syscode: "user",
      name: "users/[id]",
      title: t("user.title"),
      href: "/user/[id]" as RelativePathString,
      icon: "user",
      parentSyscode: "users",
    },
    contracts: {
      syscode: "contracts",
      name: "contracts",
      title: t("contracts.title"),
      href: "/contracts" as RelativePathString,
      icon: "files-o",
    },
    contract: {
      syscode: "contract",
      name: "contracts/[id]",
      title: t("contract.title"),
      href: "/contracts/[id]" as RelativePathString,
      icon: "file-o",
      parentSyscode: "contracts",
    },
    contract_filter: {
      syscode: "contract_filter",
      name: "contracts/filter",
      title: t("contract.filter"),
      href: "/contracts/filter" as RelativePathString,
      icon: "filter",
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
