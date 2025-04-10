import React from "react";
import { Drawer } from "react-native-drawer-layout";

import { IMenu } from "@/types/menu";
import SideMenuListCmp from "./SideMenuList";

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
