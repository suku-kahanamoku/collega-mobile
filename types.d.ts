declare module "react-native-flags" {
  import { Component } from "react";
  import { ViewStyle } from "react-native";

  interface FlagProps {
    code: string;
    size?: number;
    style?: ViewStyle;
  }

  export default class Flag extends Component<FlagProps> {}
}
