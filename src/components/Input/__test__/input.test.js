

import React from 'react';
import Input from '../index';
import { shallow } from 'enzyme'


describe('Input component', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            text : 'test',
            onChange : jest.fn(),
            type : 'text',
            value : 'value' 
        }
     
        wrapper = shallow(
            <Input {...props}/>
        );
    });

    test('renders onclick correctly', () => {
        expect(wrapper.find('Label').text()).toBe(props.text);
    });

    test('renders onclick correctly', () => {
        expect(wrapper.find('Input').props()['value']).toBe(props.value);
    });

    test('renders onclick correctly', () => {
        wrapper.find('Input').simulate('change');
        expect(props.onChange.mock.calls.length).toEqual(1);
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
