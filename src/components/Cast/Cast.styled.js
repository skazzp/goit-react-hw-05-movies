import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 25px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;
export const Photo = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const Title = styled.h3`
  margin: 0%;
  font-size: 16px;
  line-height: 1.5rem;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
`;
