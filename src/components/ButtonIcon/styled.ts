import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 56px;
  max-height: 56px;

  background-color: transparent;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
