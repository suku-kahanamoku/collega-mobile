import { usePathname } from "expo-router";

import useLocale from "@/i18n/useLocale";

export type IMenu = {
  syscode: string;
  name: string;
  title: string;
  href: any;
  active?: boolean;
};

export function useMenus() {
  const { t } = useLocale();
  const pathname = usePathname();

  /**
   * Vsechna existujici menu
   */
  const menuList: Record<string, IMenu> = {
    404: {
      syscode: "404",
      name: "+not-found",
      title: t("404.title"),
      href: "/not-found",
    },
    settings: {
      syscode: "settings",
      name: "settings",
      title: t("settings.title"),
      href: "/settings",
    },
    dashboard: {
      syscode: "dashboard",
      name: "index",
      title: t("dashboard.title"),
      href: "/",
    },
    users: {
      syscode: "users",
      name: "users",
      title: t("users.title"),
      href: "/users",
    },
  };

  /**
   * Menus, ktera maji byt videt v navigaci
   */
  const menus: IMenu[] = Object.values(menuList);

  /**
   * Aktivni menu
   */
  const activeMenu =
    menus.find((menu) => menu.href === pathname) || menuList.dashboard;

  // Prida active
  activeMenu.active = true;

  return {
    menuList,
    menus: menus.filter((menu) => !["404", "settings"].includes(menu.syscode)),
    activeMenu,
  };
}
