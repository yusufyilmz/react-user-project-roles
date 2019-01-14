import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

Modal.displayName = 'Modal'

export const ModalContent = styled.div`
    margin: 40% auto;
    text-align: center;
    font-size: x-large;
    width: 60%; 
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    border-color: #ebccd1;
    background-color: ${props => props.result === 'OK' ? '#28a745' :  '#f2dede'}
    color: ${props => props.result === 'OK' ? 'white' :  '#a94442'}
`
ModalContent.displayName = 'ModalContent'


export const ModalClose = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`

ModalClose.displayName = 'ModalClose'