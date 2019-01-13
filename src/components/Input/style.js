
import styled from 'styled-components';

export const Label = styled.label`
    float: left;
    width: 25%;
    margin: 15px 5px;`

Label.displayName = 'Label'


export const Input = styled.input`
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    background-color: ${props => (props.type === 'submit' || props.type === 'button') && '#27435c'}
    display: ${props => (props.type === 'submit' || props.type === 'button') && 'flex'}
    justify-content: ${props => (props.type === 'submit' || props.type === 'button') && 'center'}
    color: ${props => (props.type === 'submit' || props.type === 'button') && 'white'}
    `;

Input.displayName = 'Input'