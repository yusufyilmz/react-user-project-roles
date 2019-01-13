

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

    test('renders onclick correctly', () => {
        wrapper.find('ModalClose').simulate('click');
        expect(props.closeModal.mock.calls.length).toEqual(1);
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
