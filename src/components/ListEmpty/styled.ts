import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;
