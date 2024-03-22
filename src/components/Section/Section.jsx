import React from "react";
import PropTypes from "prop-types";
import { StyledItem, StyledList, Title } from "./Section.styled";
import { Flex } from "../../styles/GlobalStyles";

export const Section = ({ title = "Default", data = [] }) => {
  return (
    <section>
      <Title>{title}</Title>

      <StyledList>
        <Flex
          $direction="column"
          $justify="center"
          $align="center"
          $minHeight="50vh"
          $gap="20px"
        >
          {data.map((item) => (
            <StyledItem key={item.id}>{item.title}</StyledItem>
          ))}
        </Flex>
      </StyledList>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
