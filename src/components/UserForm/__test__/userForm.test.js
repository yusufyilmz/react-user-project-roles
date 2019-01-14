

import React from 'react';
import UserForm from '../index';
import Input from '../../Input';
import SelectBox from '../../SelectBox';
import { mount, shallow } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('USERFORM COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
        form: {
            userHasRole: true
        },
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <UserForm/>
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('Form').at(0).length).toBe(1)
    })

    test('renders element correctly', () => {
        expect(wrapper.find(SelectBox).length).toBe(3)
    })

    test('renders element correctly', () => {
        expect(wrapper.find(Input).length).toBe(5)
        expect(wrapper.find('Label').length).toBe(5)
    })


    test('renders props correctly', () => {
        expect(wrapper.find('SelectBox').at(0).props()['name']).toBe('user')
    })

    test('renders props correctly', () => {
        expect(wrapper.find('Input').at(0).props()['type']).toBe('text')
    })

    // test('snapshot correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
