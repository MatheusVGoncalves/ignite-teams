import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlights } from "@components/HighLight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlights
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da Turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
