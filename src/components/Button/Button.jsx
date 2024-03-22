import React from "react";
import PropTypes from "prop-types";
import { StyledBtn } from "./Button.styled";

export const Button = (props) => {
  return <StyledBtn type="button">{props.titleBtn}</StyledBtn>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
