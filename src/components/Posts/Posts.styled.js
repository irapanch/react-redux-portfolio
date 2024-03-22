import styled from "styled-components";

export const WrapperPosts = styled.section`
  display: grid;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  .big {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.ol`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); // 3 колонки */
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); // від однієї колонки 250px на сторінку при вузькому екрані, до множини колонок шириною 250px
  margin: 0 auto;
  gap: 15px;
  list-style: none;
`;

export const Card = styled.li`
  border: 2px solid black;
  padding: 5px 12px;
  box-shadow: 1px 1px 1px 2px gray;
  background-color: ${props => props.$bg === 'dark' ?'lime' : 'lightgrey'};
`;
