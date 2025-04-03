import React from "react";
import { Drawer } from "react-native-drawer-layout";

import MenuListCmp from "./MenuList";
import { IMenu } from "@/types/menu";
import { useRoute } from "@/hooks/useRoute";

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
  const { navigate } = useRoute();

  const onPress = (menu: IMenu) => {
    navigate(menu.href);
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      drawerPosition="right"
      renderDrawerContent={() => MenuListCmp({ menus, onPress })}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {children}
    </Drawer>
  );
};

export default SideMenuCmp;
