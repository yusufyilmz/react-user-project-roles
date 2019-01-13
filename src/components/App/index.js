import React from 'react';
import { Container, } from './style';
import {Header} from '../Header';
import UserForm from '../UserForm';
import Result from '../Result';

export const App = () => {
    return (
        <Container>
        <Header message="User Project Roles"/>
        <UserForm />
        <Result />
    </Container>
    );
}

export default App;
