import React from "react";
import { Drawer } from "react-native-drawer-layout";

import { IMenu } from "@/types/menu";
import SideMenuListCmp from "./SideMenuList";

/**
 * Vstupní parametry pro komponentu SideMenu.
 *
 * @interface ISideMenuProps
 * @property {React.ReactNode} children - Obsah, který bude zobrazen uvnitř bočního menu.
 * @property {boolean} open - Boolean indikující, zda je boční menu otevřené nebo zavřené.
 * @property {IMenu[]} menus - Pole položek menu, které budou zobrazeny v bočním menu.
 * @property {(open: boolean) => void} setOpen - Funkce pro aktualizaci stavu otevření bočního menu.
 */
interface ISideMenuProps {
  children: React.ReactNode;
  open: boolean;
  menus: IMenu[];
  setOpen: (open: boolean) => void;
}

/**
 * SideMenuCmp je funkční React komponenta, která vykresluje boční menu pomocí komponenty `Drawer`.
 * Poskytuje přizpůsobitelné menu, které lze otevřít nebo zavřít, a zobrazuje dětské komponenty,
 * když menu není aktivní.
 *
 * @param {ISideMenuProps} props - Vstupní parametry pro komponentu SideMenuCmp.
 * @param {React.ReactNode} props.children - Dětské komponenty, které budou vykresleny uvnitř Drawer.
 * @param {boolean} props.open - Boolean indikující, zda je boční menu otevřené.
 * @param {Array<any>} props.menus - Pole položek menu, které budou zobrazeny v bočním menu.
 * @param {(open: boolean) => void} props.setOpen - Funkce pro aktualizaci stavu otevření bočního menu.
 *
 * @returns {JSX.Element} Vykreslená komponenta SideMenuCmp.
 */
const SideMenuCmp: React.FC<ISideMenuProps> = ({
  children,
  open,
  menus,
  setOpen,
}) => {
  return (
    <Drawer
      open={open}
      drawerPosition="right"
      renderDrawerContent={() => SideMenuListCmp({ menus, setOpen })}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {children}
    </Drawer>
  );
};

export default SideMenuCmp;
