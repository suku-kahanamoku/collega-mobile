import { ListItem } from "@rneui/themed";

import { UiView } from "@/modules/Ui/components/Themed";
import ThemeSwitchCmp from "@/components/settings/ThemeSwitch";
import LangSwitchCmp from "@/components/settings/LangSwitch";

export default function SettingsScreen() {
  return (
    <UiView>
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
    </UiView>
  );
}
