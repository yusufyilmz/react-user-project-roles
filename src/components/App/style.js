

import styled from 'styled-components';


export const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 60%;
  margin-right: auto; 
  margin-left: auto; 
  margin-top: 50px; 
  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 100px; 
  }`;

Container.displayName = 'Container';

export const H1 = styled.h1`
    padding: 0;
    height: 90px;
    line-height: 90px;
    text-align: center;  
`;

