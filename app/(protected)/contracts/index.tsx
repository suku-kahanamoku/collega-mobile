import { ScrollView } from "react-native";
import { Avatar, Button, ListItem, Text } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import { useRoute } from "@/hooks/useRoute";
import { useContract } from "@/modules/Contract/hooks/useContract";
import LoadingPage from "@/modules/Ui/components/Loading";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import { useTheme } from "@/modules/Ui/hooks/useTheme";

const logoImg = require("@/assets/images/logo.png");

export default function ContractsScreen() {
  const { contracts, loading } = useContract();
  const { menuList, navigate } = useRoute();
  const { colors } = useTheme();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return <LoadingPage />;
  }

  if (!contracts?.length) {
    return <RecordNotFoundPage message="global.records_404" />;
  }

  return (
    <ScrollView>
      {contracts.map((item, i) => (
        <ListItem.Swipeable
          Component={TouchableScale}
          bottomDivider
          rightWidth={60}
          key={i}
          containerStyle={{ backgroundColor: colors.background }}
          rightContent={(close) => (
            <Button
              type="clear"
              icon={{ name: "delete-outline", color: colors.error, size: 32 }}
              containerStyle={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => console.log("delete", item, close())}
            />
          )}
          onPress={() => navigate(`${contractsMenu.href}/${item.id}`)}
        >
          <Avatar
            rounded
            source={item.partner_logo ? { uri: item.partner_logo } : logoImg}
          />
          <ListItem.Content>
            <ListItem.Title>
              <Text h3>{item.partner_name}</Text>
            </ListItem.Title>
            <ListItem.Title>
              <Text h4>{item.product_name}</Text>
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: colors.secondary }}>
              {item.client}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable>
      ))}
    </ScrollView>
  );
}
