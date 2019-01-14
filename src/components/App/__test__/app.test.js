

import React from 'react';
import {App} from '../index';
import {Header} from '../../Header';
import UserForm from '../../UserForm';
import ResultBox from '../../ResultBox';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('APP COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
        form: {
                users: [],
                roles: [],
                projects: [],
                result: '',
                message: '',
                userHasRole: false
            }
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find(Header).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ResultBox).length).toBe(1)
    });


    test('renders element correctly', () => {
        expect(wrapper.find(UserForm).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('Main').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('Container').length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.find(Header).props()['message']).toBe('User Project Roles')
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
