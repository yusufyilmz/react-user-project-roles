

import React from 'react';
import SelectBox from '../index';
import Input from '../../Input';
import { mount } from 'enzyme'


describe('SelectBox component', () => {


    let props, wrapper;

    beforeEach(() => {
        props = {
            name: 'testName',
            text: 'testText',
            placeHolder: 'testPlaceholder',
            selectItem : jest.fn(),
            list: [{
                id: 1,
                name: 'test'
              }
            ]
        }
        wrapper = mount(
            <SelectBox
                {...props}
                required={true} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Input).length).toBe(1)

    });

    test('renders element prop correctly', () => {
        expect(wrapper.find('Input').prop('placeholder')).toBe(props.placeHolder);
    });


    test('renders click correctly', () => {
        wrapper.find('Input').simulate('click');
        expect(wrapper.find('Ul')).toBeTruthy()
    });


    test('renders click and new elements correctly', () => {
        wrapper.find('Input').simulate('click');
        expect(wrapper.find('li').length).toBe(props.list.length)
    });


    test('renders select item correctly', () => {
        wrapper.find('Input').simulate('click');
        // let li = wrapper.find('li')[0]
        wrapper.find('li').simulate('click');
        expect(props.selectItem.mock.calls.length).toEqual(1);
    });


    test('renders select item and value correctly', () => {
        wrapper.find('Input').simulate('click');
        wrapper.find('li').simulate('click');
        expect(wrapper.find('Input').props()['value']).toBe(props.list[0].name);
    });


    test('renders element correctly', () => {
        // expect(wrapper).toMatchSnapshot();
    });

})
