import React from "react";
import styled from "styled-components";
import { Flex } from "../../styles/GlobalStyles";
import { StyledButton } from "../Counter/Counter.styled";

const skilsList = ["all", "react", "angular", "vue"];
// filterStr={filterStr}
//           setFilterStr={this.handleChangeFilter}
export const EmployeesFilter = ({
  filterStr,
  setFilter,
  isAvailable,
  toggleIsAvailable,
  activeSkill,
  setActiveSkill,
  toggleModal,
}) => {
  // --------3  отримали стан isAvailable з Employee
  // ========3 отримали  функцію перемикання toggleIsAvailable з Employee
  // ++++++++ 4 прийняли функцію відкр/закр модалки toggleModal
  return (
    <Filters>
      <h2>Filters</h2>
      <StyledButton onClick={toggleModal}>Open modal</StyledButton>
      {/* +++++ 5  застосовуємо метод ВІДКРИТТЯ модалки toggleModal */}
      <Flex $height="100px" $items="center">
        <input
          type="text"
          value={filterStr}
          onChange={(e) => setFilter(e.target.value)}
        />

        <label htmlFor="isAvailable">
          <input
            onChange={toggleIsAvailable} // ======== 4 використали функцію
            checked={isAvailable} // ------4 використали стан
            type="checkbox"
            id="isAvailable"
          />
          <span> isAvailable</span>
        </label>
      </Flex>
      <Flex $height="100px" $items="center">
        {skilsList.map((radioButtonName) => (
          <label key={radioButtonName}>
            <input
              name="radioButtonName"
              type="radio"
              onChange={() => setActiveSkill(radioButtonName)}
              checked={activeSkill === radioButtonName}
              value={radioButtonName}
            />
            <span> {radioButtonName}</span>
          </label>
        ))}
      </Flex>
    </Filters>
  );
};

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #cbd3ff;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px 0;
  margin-bottom: 20px;
`;
