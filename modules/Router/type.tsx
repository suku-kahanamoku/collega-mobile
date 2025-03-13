import FontAwesome from "@expo/vector-icons/FontAwesome";
import { RelativePathString } from "expo-router";

export type IMenu = {
  syscode: string;
  name: string;
  title: string;
  href: RelativePathString;
  active?: boolean;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  children?: IMenu[];
  parentSyscode?: string;
};
