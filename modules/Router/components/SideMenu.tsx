import React from "react";
import { Drawer } from "react-native-drawer-layout";

import MenuListCmp from "./MenuList";
import { IMenu } from "../type";

interface SideMenuProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  menus: IMenu[];
}

const SideMenuCmp: React.FC<SideMenuProps> = ({
  children,
  open,
  setOpen,
  menus,
}) => {
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() =>
        MenuListCmp({ menus, onPress: () => setOpen(false) })
      }
      drawerPosition="right"
    >
      {children}
    </Drawer>
  );
};

export default SideMenuCmp;
