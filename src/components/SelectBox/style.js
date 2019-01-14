import styled from 'styled-components';

export const Ul = styled.ul`
    z-index: 10;
    position: absolute;
    width: 95%;
    margin-top: 0px;
    border: 1px solid #dfdfdf;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 5px -1px #e8e8e8;
    box-shadow: 0 2px 5px -1px #e8e8e8;
    font-weight: 700;
    padding: 15px 0;
    max-height: 215px;
    @media screen and (max-width: 600px) {
      width: 85%;
    }`;

export const Li = styled.li`
    width: inherit;
    font-size: 1rem;
    padding: 8px 10px;
    line-height: 1.6rem;
    cursor: default;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:selected {
      color: #fff;
      background-color: #27435c;
    }
    &:hover {
      color: black;
      background-color: #27435c;
    }`;
