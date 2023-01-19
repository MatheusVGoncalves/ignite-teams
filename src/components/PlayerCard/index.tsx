import { ButtonIcon } from "@components/ButtonIcon";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Name } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
};

export function PlayerCard({ name, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" />
    </Container>
  );
}
