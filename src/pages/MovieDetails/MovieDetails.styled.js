import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Poster = styled.img`
  display: block;
  padding: 0;
  margin: 0;
  width: 250px;
`;

export const Container = styled.div`
  margin: 20px 25px;
  display: flex;
  gap: 25px;
`;
export const MoreInfo = styled.div`
  width: 100%;
  margin: 20px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const LinkBtn = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const BackLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
`;
