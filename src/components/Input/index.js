import React, { Fragment } from 'react';
import { Input, Label } from './style';


export default ({ type, name, text, onChange, value, onClick, required, placeHolder, width}) => {
    return (
        <Fragment>
            <Label htmlFor={name} >{text}</Label>
            <Input
                placeholder={placeHolder}
                width={width}
                name={name}
                autoComplete="off"
                required={required}
                id={name}
                type={type}
                onChange={onChange}
                onClick={onClick}
                value={value}>
            </Input>
        </Fragment>
    )
}


