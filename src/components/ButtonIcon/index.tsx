import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styled";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
