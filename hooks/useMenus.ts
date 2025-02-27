import FontAwesome from "@expo/vector-icons/FontAwesome";
import { usePathname } from "expo-router";
import { useTranslation } from "react-i18next";

export type IMenu = {
  syscode: string;
  name: string;
  title: string;
  href: any;
  active?: boolean;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
};

export function useMenus() {
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
      href: "/not-found",
    },
    settings: {
      syscode: "settings",
      name: "settings",
      title: t("settings.title"),
      href: "/settings",
      icon: "cog",
    },
    dashboard: {
      syscode: "dashboard",
      name: "index",
      title: t("dashboard.title"),
      href: "/",
      icon: "dashboard",
    },
    users: {
      syscode: "users",
      name: "users",
      title: t("users.title"),
      href: "/users",
      icon: "users",
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
