

import React from 'react';
import {Header} from '../index';
import { shallow } from 'enzyme'


describe('Header component', () => {

    let message, wrapper;

    beforeEach(() => {
        message = 'test';
        wrapper = shallow(
            <Header message={message} />
        );
    });
   
    test('renders element correctly', () => {
        expect(wrapper.find('div').text()).toBe(message);
    });


    test('renders element correctly', () => {
        // expect(wrapper).toMatchSnapshot();
    });
    
})
