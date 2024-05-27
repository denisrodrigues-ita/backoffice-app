import React from "react";
import { View, Text } from "react-native";
import { IconButton, Menu } from "react-native-paper";

const Header = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text>Header</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchorPosition={"bottom"}
        anchor={<IconButton icon="menu" size={40} onPress={openMenu} />}
        style={{ marginTop: 8 }}
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default Header;
