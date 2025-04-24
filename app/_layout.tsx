import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";

import { LangProvider } from "@/modules/Lang/providers/LangProvider";
import { AuthProvider } from "@/modules/Auth/providers/AuthProvider";
import { RouteProvider } from "@/providers/RouteProvider";
import { ThemeProviderCmp } from "@/modules/Ui/providers/ThemeProvider";
import ContentCmp from "@/components/Content";

export default function RootLayout() {
  return (
    <LangProvider>
      <AuthProvider>
        <RouteProvider>
          <ThemeProviderCmp>
            <StatusBar barStyle={"default"} />
            <ContentCmp />
            <Toast />
          </ThemeProviderCmp>
        </RouteProvider>
      </AuthProvider>
    </LangProvider>
  );
}
