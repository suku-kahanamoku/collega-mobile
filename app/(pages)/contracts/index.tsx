import { ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ListItem } from "@rneui/themed";

import { useRoute } from "@/hooks/useRoute";
import { useContract } from "@/modules/Contract/hooks/useContract";
import LoadingPage from "@/modules/Ui/components/Loading";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";

export default function ContractsScreen() {
  const { contracts, loading, error } = useContract();
  const { menuList } = useRoute();
  const contractsMenu = menuList.contracts;

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <RecordNotFoundPage message="global.records_404" />;
  }

  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
  },
});
