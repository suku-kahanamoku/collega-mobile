import { View } from "react-native";
import { ListItem } from "@rneui/themed";

import ThemeSwitchCmp from "@/components/settings/ThemeSwitch";
import LangSwitchCmp from "@/components/settings/LangSwitch";

export default function SettingsScreen() {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ThemeSwitchCmp />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <LangSwitchCmp />
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
