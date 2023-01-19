import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlights } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleCreateGroup = () => {
    navigation.navigate("players", { group });
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
