import { createTheme } from "@rneui/themed";

import uiConfig from "@/ui.config.json";

import { ITheme } from "./types/theme.interface";

export const colors = uiConfig.colors;

export const createUiTheme = (theme: ITheme) => {
  const backgroundColor =
    theme === "dark" ? colors.dark.background : colors.light.background;

  return createTheme({
    lightColors: colors.light,
    darkColors: colors.dark,
    mode: theme,
    components: {
      Text: uiConfig.fontSizes,
      CardTitle: uiConfig.fontSizes,
      Card: {
        containerStyle: {
          backgroundColor,
        },
      },
    },
  });
};
