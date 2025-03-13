import { StatusBar } from "react-native";

import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LocaleProviderCmp } from "@/providers/LocaleProvider";
import { RouterProvider } from "@/modules/Router/providers/RouterProvider";
import Content from "@/modules/Router/components/Content";

export default function RootLayout() {
  return (
    <LocaleProviderCmp>
      <RouterProvider>
        <ThemeProviderCmp>
          <StatusBar barStyle={"default"} />
          <Content />
        </ThemeProviderCmp>
      </RouterProvider>
    </LocaleProviderCmp>
  );
}
