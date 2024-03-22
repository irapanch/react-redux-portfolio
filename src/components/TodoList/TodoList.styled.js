import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTodo = styled(motion.li)`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px grey;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
`;
export const StyledTodoList = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 70vw;
  padding: 40px 20px;
  margin: 0 auto;
`;
export const StyledInput = styled.input`
  width: 80%;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px grey;
  border: 1px solid black;
  outline: none;
  padding: 0 20px;
  font-size: 20px;
`;
