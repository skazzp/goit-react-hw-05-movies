import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  padding: 50px;
  margin: 0;
  gap: 20px;
`;
export const Item = styled.li`
  display: block;
  /* width: calc(100% / 3); */
  width: 20%;
  /* height: 300px; */
`;
export const Poster = styled.img`
  width: 100%;
`;
