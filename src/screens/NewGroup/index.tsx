import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlights } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleCreateGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Groupo", "Informe o nome da turma");
      }
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Groupo", error.message);
      } else {
        Alert.alert("Novo Groupo", "Não foi possível criar um novo grupo");
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlights
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da Turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
}
