import React, { Component } from 'react';
import { Container, } from './style';
import {Header} from '../Header';
import UserForm from '../UserForm';

import Result from '../Result';

class App extends Component {

    render() {
        return (
                <Container>
                    <Header message="User Project Roles"/>
                    <UserForm />
                    <Result />
                </Container>
        );
    }
}

export default App;
