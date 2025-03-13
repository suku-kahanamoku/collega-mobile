import { StatusBar } from "react-native";
import { RelativePathString } from "expo-router";
import { useTranslation } from "react-i18next";

import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LocaleProviderCmp } from "@/providers/LocaleProvider";
import { RouterProvider } from "@/modules/Router/providers/RouterProvider";
import Content from "@/modules/Router/components/Content";

export default function RootLayout() {
  const { t } = useTranslation("$");

  const menuList = {
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
      icon: "cog" as const,
    },
    dashboard: {
      syscode: "dashboard",
      name: "index",
      title: t("dashboard.title"),
      href: "/" as RelativePathString,
      icon: "dashboard" as const,
    },
    users: {
      syscode: "users",
      name: "users",
      title: t("users.title"),
      href: "/users" as RelativePathString,
      icon: "users" as const,
    },
    user: {
      syscode: "user",
      name: "users/[id]",
      title: t("user.title"),
      href: "/user/[id]" as RelativePathString,
      icon: "user" as const,
      parentSyscode: "users",
    },
    contracts: {
      syscode: "contracts",
      name: "contracts",
      title: t("contracts.title"),
      href: "/contracts" as RelativePathString,
      icon: "files-o" as const,
    },
    contract: {
      syscode: "contract",
      name: "contracts/[id]",
      title: t("contract.title"),
      href: "/contracts/[id]" as RelativePathString,
      icon: "file-o" as const,
      parentSyscode: "contracts",
    },
    contract_filter: {
      syscode: "contract_filter",
      name: "contracts/filter",
      title: t("contract.filter"),
      href: "/contracts/filter" as RelativePathString,
      icon: "filter" as const,
      parentSyscode: "contracts",
    },
  };

  return (
    <LocaleProviderCmp>
      <RouterProvider menuList={menuList}>
        <ThemeProviderCmp>
          <StatusBar barStyle={"default"} />
          <Content />
        </ThemeProviderCmp>
      </RouterProvider>
    </LocaleProviderCmp>
  );
}
