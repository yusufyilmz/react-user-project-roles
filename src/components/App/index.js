import React from 'react';
import { Container, Main } from './style';
import { Header } from '../Header';
import UserForm from '../UserForm';
import ResultBox from '../ResultBox';

export const App = () => {
    return (
        <Container>
            <Main>
                <Header message="User Project Roles" />
                <UserForm />
                <ResultBox />
            </Main>
        </Container>
    );
}

export default App;
