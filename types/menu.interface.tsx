import { RelativePathString } from "expo-router";
import { Icon } from "@rneui/base";

import config from "../route.config.json";

/**
 * Reprezentuje položku menu v aplikaci.
 *
 * @interface IMenu
 * @property {string} syscode - Jedinečný systémový kód identifikující položku menu.
 * @property {string} name - Název položky menu.
 * @property {string} title - Zobrazovaný název položky menu.
 * @property {RelativePathString} href - Relativní URL cesta pro položku menu.
 * @property {boolean} [active] - Určuje, zda je položka menu aktuálně aktivní (volitelné).
 * @property {React.ComponentProps<typeof Icon>["name"]} [icon] - Název ikony spojené s položkou menu (volitelné).
 * @property {IMenu[]} [children] - Seznam podřízených položek menu (volitelné).
 * @property {string} [parentSyscode] - Systémový kód nadřazené položky menu, pokud existuje (volitelné).
 * @property {"system"} [group] - Skupina, do které položka menu patří, např. "system" (volitelné).
 */
export interface IMenu {
  syscode: keyof typeof config;
  name: string;
  title: string;
  href: RelativePathString;
  active?: boolean;
  icon?: React.ComponentProps<typeof Icon>["name"];
  children?: IMenu[];
  parentSyscode?: keyof typeof config;
  group?: "system";
}

/**
 * Reprezentuje základní modelovou položku.
 *
 * @interface IModelItem
 * @property {number} id - Jedinečný identifikátor položky.
 * @property {number} createdBy - ID uživatele, který položku vytvořil.
 * @property {string} createdAt - Datum a čas vytvoření položky.
 * @property {number} updatedBy - ID uživatele, který položku naposledy aktualizoval.
 * @property {string} updatedAt - Datum a čas poslední aktualizace položky.
 * @property {boolean} deleted - Určuje, zda je položka označena jako smazaná.
 * @property {boolean} active - Určuje, zda je položka aktivní.
 */
export interface IModelItem {
  id: number;
  createdBy: number;
  createdAt: string;
  updatedBy: number;
  updatedAt: string;
  deleted: boolean;
  active: boolean;
}
