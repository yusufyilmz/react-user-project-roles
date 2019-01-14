

import styled from 'styled-components';


export const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 0 20px;
  width: 60%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0px;
  right: 0;
  border: solid black;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 100%;
    border: none;
  }`;

Container.displayName = 'Container';

export const H1 = styled.h1`
    padding: 0;
    height: 90px;
    line-height: 90px;
    text-align: center;  
`;

export const Main = styled.div`
display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    height: 100%;

`;

Main.displayName = 'Main';



