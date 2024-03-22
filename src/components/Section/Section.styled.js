import { styled } from "styled-components";
export const Title = styled.h1`
  display: inline-block;
  font-size: calc((1vh + 1vw) * 3.2);
  border: 10px solid black;
  padding: calc((1vh + 1vw) * 2) calc((1vh + 1vw) * 3.2);
  /* padding: 10px; */
`;
export const StyledList = styled.ul`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;

export const StyledItem = styled.li`
  width: 150px;
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.$color || "black"};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
`;
