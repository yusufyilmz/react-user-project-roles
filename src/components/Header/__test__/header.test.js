

import React from 'react';
import {Header} from '../index';
import { shallow } from 'enzyme'


describe('HEADER COMPONENT', () => {

    let message, wrapper;

    beforeEach(() => {
        message = 'test';
        wrapper = shallow(
            <Header message={message} />
        );
    });
   
      
    test('renders element correctly', () => {
        expect(wrapper.find('div').length).toBe(1);
    });

    test('renders element correctly', () => {
        expect(wrapper.find('h1').length).toBe(1);
    });

    test('renders text correctly', () => {
        expect(wrapper.find('div').text()).toBe(message);
    });

    // test('snapshot correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });
})
