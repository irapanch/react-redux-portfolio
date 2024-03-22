import { createGlobalStyle, styled } from "styled-components";

export const GlobalSyles = createGlobalStyle`
body{
  @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');
  font-family: 'Coming Soon', cursive;
  // local fonts
  /* @font-face {
    font-family: ;
    src: url( path to fonts);
  } */

    background-color: ${({ theme }) => theme.colors.bgMain};
    .title{
        color: darkblue;
    }
}
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "stretch"};
  align-items: ${(props) => props.$align || "stretch"};
  min-height: ${(props) => props.$minHeight || "auto"};
  gap: ${(props) => props.$gap || "10px"};
`;
