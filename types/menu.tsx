import { RelativePathString } from "expo-router";
import { Icon } from "@rneui/base";

export type IMenu = {
  syscode: string;
  name: string;
  title: string;
  href: RelativePathString;
  active?: boolean;
  icon?: React.ComponentProps<typeof Icon>["name"];
  children?: IMenu[];
  parentSyscode?: string;
};
