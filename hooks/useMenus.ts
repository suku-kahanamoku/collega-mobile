import { usePathname } from "expo-router";

export function useMenus() {
  const menus = [
    { title: "Home", href: "/" },
    { title: "User", href: "/user" },
    { title: "Settings", href: "/settings" },
  ];

  const pathname = usePathname();
  const activeMenu = menus.find((menu) => menu.href === pathname) || menus[0];

  return { menus, activeMenu };
}
