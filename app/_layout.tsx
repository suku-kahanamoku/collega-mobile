import { StatusBar } from "react-native";

import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LangProvider } from "@/modules/Lang/providers/LangProvider";
import Content from "@/components/Content";
import { RouteProvider } from "@/providers/RouteProvider";

export default function RootLayout() {
  return (
    <LangProvider>
      <RouteProvider>
        <ThemeProviderCmp>
          <StatusBar barStyle={"default"} />
          <Content />
        </ThemeProviderCmp>
      </RouteProvider>
    </LangProvider>
  );
}
