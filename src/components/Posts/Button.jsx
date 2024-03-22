import React from "react";
import styled from "styled-components";

//  варіант з ...пропсами

export const Button = (props) => {
  return <StyledButton {...props} />;

  // <input {...props} />  за такою ж схемою можна організувати й інпут
};

const StyledButton = styled.button`
  padding: 10px 12px;
  width: 200px;
  margin: auto;
  margin-top: 20px;
  background-color: ${(props) => props.$bg};
`;

// Варіант з чілдренами

// export const Button = ({ children }) => {
//   return <StyledButton>{children}</StyledButton>;
// };

// const StyledButton = styled.button`
//   padding: 10px 12px;
//   width: 200px;
//   margin: auto;
//   margin-top: 20px;
// `;
