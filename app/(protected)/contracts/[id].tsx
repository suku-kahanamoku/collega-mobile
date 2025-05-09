import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useContract } from "@/modules/Contract/hooks/useContract";
import RecordNotFoundPage from "@/modules/Ui/components/RecordNotFound";
import ContractCardCmp from "@/modules/Contract/components/ContractCard";

export default function ContractScreen() {
  const { id } = useLocalSearchParams();
  const { contracts, fieldList } = useContract();
  const contract = contracts.find((c) => c.id === Number(id));

  if (!contract) {
    return <RecordNotFoundPage />;
  }

  return (
    <ScrollView>
      <ContractCardCmp contract={contract} fieldList={fieldList} />
    </ScrollView>
  );
}
