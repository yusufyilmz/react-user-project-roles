

import React from 'react';
import Modal from '../index';
import { shallow } from 'enzyme'


describe('MODAL COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            value : 'test',
            closeModal : jest.fn(),
            result : "SUCCESS",
            message : "test",
            type : 'text'
        }
      
        wrapper = shallow(
            <Modal  {...props}  />
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find('ModalClose').length).toEqual(1);
    });

    test('renders element correctly', () => {
        expect(wrapper.find('Modal').length).toEqual(1);

    });

    test('renders element correctly', () => {
        expect(wrapper.find('ModalContent').length).toEqual(1);
    });

    test('renders props correctly', () => {
        expect(wrapper.find('ModalContent').props()['result']).toEqual(props.result);
    });

    test('renders onclick correctly', () => {
        wrapper.find('ModalClose').simulate('click');
        expect(props.closeModal.mock.calls.length).toEqual(1);
    });

    test('snapshot correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
