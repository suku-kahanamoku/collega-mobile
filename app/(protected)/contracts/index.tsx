import { ScrollView } from "react-native";

import { useRoute } from "@/hooks/useRoute";
import { useContract } from "@/modules/Contract/hooks/useContract";
import LoadingPage from "@/modules/Ui/components/Loading";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import ContractListItemCmp from "@/modules/Contract/components/ContractListItem";

export default function ContractsScreen() {
  const { contracts, loading } = useContract();
  const { menuList, navigate } = useRoute();
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
        <ContractListItemCmp
          key={i}
          item={item}
          onPress={() => navigate(`${contractsMenu.href}/${item.id}`)}
          onDelete={() => console.log("delete", item)}
        />
      ))}
    </ScrollView>
  );
}
