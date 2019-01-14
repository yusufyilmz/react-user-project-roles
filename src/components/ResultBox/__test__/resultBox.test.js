

import React from 'react';
import {App} from '../index';
import {Header} from '../../Header';
import Modal from '../../Modal';
import ResultBox from '../../ResultBox';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('RESULTBOX COMPONENT', () => {

    let wrapper, props;

    const mockStore = configureMockStore(middlewares);

    beforeEach(() => {
        props = {
            form: {
                users: [],
                roles: [],
                projects: [],
                result: 'SUCCESS',
                message: 'test',
                userHasRole: false
        }
        }
        const store = mockStore(props);
        wrapper = mount(
            <Provider store={store}>
                <ResultBox />
            </Provider>
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find(Modal).length).toBe(1)
    });

        test('renders props correctly', () => {
            expect(wrapper.find(Modal).props()['message']).toBe(props.form.message)
        });


    test('renders props correctly', () => {
        expect(wrapper.find(Modal).props()['result']).toBe(props.form.result)
    });

    test('snapshot correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
