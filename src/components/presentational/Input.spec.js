import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input component', () => {
    describe('render', () => {
        
        //load the component and check its props
        it('should have prop className', () => {
            const wrapper = shallow(<Input />);
            expect(wrapper.prop('className')).toBe('form-group')
        });

        //set the prop to the prop and check if it has propogated to the input element
        it('should have prop className', () => {
            const wrapper = shallow(<Input value="test"/>);
            expect(wrapper.find('input').prop('value')).toBe('test');
        });
    })
})
