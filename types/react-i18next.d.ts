import "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    // Specify the default namespace
    defaultNS: "$";
    // Specify the available namespaces
    resources: {
      $: typeof import("../modules/Form/locales/en.json");
    };
  }
}
