import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 25px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Avatar = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
`;

export const User = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  align-items: center;
  justify-content: start;
`;
