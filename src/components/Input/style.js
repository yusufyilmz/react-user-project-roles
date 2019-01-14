
import styled from 'styled-components';

export const Label = styled.label`
    float: left;
    width: 25%;
    margin: 15px 5px;
    font-size: x-large;
    `

Label.displayName = 'Label'


export const Input = styled.input`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    background-color: ${props => (props.type === 'submit' || props.type === 'button') && '#27435c'};
    display: ${props => (props.type === 'submit' || props.type === 'button') && 'flex'};
    justify-content: ${props => (props.type === 'submit' || props.type === 'button') && 'center'};
    color: ${props => (props.type === 'submit' || props.type === 'button') && 'white'};
    height: ${props => (props.type === 'submit' || props.type === 'button') && '50px'};
    text-indent: ${props => (props.type === 'text' ) && '30px'};
    font-size: ${props => (props.type === 'submit' || props.type === 'button') ? 'x-large' : 'medium' };
    padding: ${props => (props.type === 'submit' || props.type === 'button') ? '' : '15px 0' };

    `;

Input.displayName = 'Input'