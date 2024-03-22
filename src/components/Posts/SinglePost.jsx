import React from "react";
import { Card } from "./Posts.styled";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProviderContext";

export const SinglePost = ({ id, title, body }) => {
  const {theme} =  useContext(ThemeContext)
  return (
    <Card $bg={theme}>
      <h2>{title}</h2>
      <p>{body}</p>
    </Card>
  );
};
