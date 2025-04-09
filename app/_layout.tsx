import { StatusBar } from "react-native";

import { LangProvider } from "@/modules/Lang/providers/LangProvider";
import { AuthProvider } from "@/modules/Auth/providers/AuthProvider";
import { RouteProvider } from "@/providers/RouteProvider";
import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import Content from "@/components/Content";

export default function RootLayout() {
  return (
    <LangProvider>
      <AuthProvider>
        <RouteProvider>
          <ThemeProviderCmp>
            <StatusBar barStyle={"default"} />
            <Content />
          </ThemeProviderCmp>
        </RouteProvider>
      </AuthProvider>
    </LangProvider>
  );
}
