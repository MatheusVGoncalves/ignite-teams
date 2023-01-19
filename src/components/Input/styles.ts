import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};
  `}

  border-radius: 6px;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
