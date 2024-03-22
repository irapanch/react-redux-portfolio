import { styled } from "styled-components";
export const StyledBtn = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;
