import { StatusBar } from "react-native";

import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LangProvider } from "@/modules/Lang/providers/LangProvider";
import { RouterProvider } from "@/modules/Router/providers/RouterProvider";
import Content from "@/modules/Router/components/Content";

export default function RootLayout() {
  return (
    <LangProvider>
      <RouterProvider>
        <ThemeProviderCmp>
          <StatusBar barStyle={"default"} />
          <Content />
        </ThemeProviderCmp>
      </RouterProvider>
    </LangProvider>
  );
}
