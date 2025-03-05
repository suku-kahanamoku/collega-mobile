import { StatusBar } from "react-native";

import { ThemeProviderCmp } from "@/providers/ThemeProvider";
import { LocaleProviderCmp } from "@/providers/LocaleProvider";
import { RouteProviderCmp } from "@/providers/RouteProvider";
import AppContent from "@/components/AppContent";

export default function RootLayout() {
  return (
    <LocaleProviderCmp>
      <RouteProviderCmp>
        <ThemeProviderCmp>
          <StatusBar barStyle={"default"} />
          <AppContent />
        </ThemeProviderCmp>
      </RouteProviderCmp>
    </LocaleProviderCmp>
  );
}
