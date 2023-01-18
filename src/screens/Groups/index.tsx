import { Header } from "@components/Header";
import { Highlights } from "@components/HighLight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlights title="Turmas" subtitle="Jogue com sua turma" />
    </Container>
  );
}
