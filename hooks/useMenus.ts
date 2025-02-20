import { usePathname } from "expo-router";

export type IMenu = {
  title: string;
  href: any;
  active?: boolean;
};

export function useMenus() {
  const menus: IMenu[] = [
    { title: "Home", href: "/" },
    { title: "User", href: "/user" },
  ];

  const pathname = usePathname();
  const activeMenu = menus.find((menu) => menu.href === pathname) || menus[0];

  // Přidání atributu `active` do aktivního menu
  const updatedMenus = menus.map((menu) => ({
    ...menu,
    active: menu.href === activeMenu.href,
  }));

  return { menus: updatedMenus, activeMenu };
}
