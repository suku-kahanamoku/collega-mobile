import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ListItem } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { UiView, UiText } from "@/modules/Ui/components/Themed";
import { useContract } from "@/modules/Contract/hooks/useContract";
import LoadingCmp from "@/modules/Ui/components/Loading";
import RecordNotFound from "@/modules/Ui/components/RecordNotFound";

export default function ContractsScreen() {
  const { contracts, loading, error } = useContract();
  const { menuList } = useRoute();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return <LoadingCmp />;
  }

  if (error) {
    return <RecordNotFound message="global.records_404" />;
  }

  return (
    <UiView>
      {contracts.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Link href={`${contractsMenu.href}/${item.id}`} style={styles.item}>
            <ListItem.Content>
              <ListItem.Title>{item.partner_name}</ListItem.Title>
              <ListItem.Title>{item.product_name}</ListItem.Title>
              <ListItem.Subtitle>{item.client}</ListItem.Subtitle>
            </ListItem.Content>
          </Link>
        </ListItem>
      ))}
    </UiView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
