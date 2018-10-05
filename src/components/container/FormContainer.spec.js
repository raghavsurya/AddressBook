import React from 'react';
import { shallow, mount } from 'enzyme';
import FormComponent from './FormContainer';
import Input from '../presentational/Input';

describe('FormComponent', () => {
    describe('render', () => {
       //calling the shallow function from enzyme to load the component which will then give us all the props attached to the component
        it('should have the id in the props', () => {
            const wrapper = shallow(<FormComponent />);
            expect(wrapper.prop('id')).toBe('address-form');
        })

        it('should have the Input component in the form', () => {
            const wrapper = shallow(<FormComponent />);
            expect(wrapper.find(Input).first()).toHaveLength(1);
        })
    });
    describe('Input component render', () => {
       // finding the input component inside the form and checking its props
        it('should have the id in the props', () => {
            const wrapper = shallow(<FormComponent />);
            expect(wrapper.find(Input).first().prop('id')).toBe('contact_name');
        })

        it('should have the handleChange in the props', () => {
            const wrapper = shallow(<FormComponent />);
            expect(wrapper.find(Input).first().prop('label')).toBe('address_contact_name');
        })
    });

    /* find the Input component in the parent form and set its value explicitly. Since we are going a level deeper and finding the 
        Input inside the form and accessing its instance, we need to call mount which gives us access to the entire DOM tree */
    describe('Entering a value in Input component', () => {
        it('should call the handleChange event and return the updated value', () => {
            const wrapper = mount(<FormComponent />);
            wrapper.find(Input).first().instance().value = 'test';
            
            expect(wrapper.find(Input).first().instance().value).toBe('test');
        })

        /*To call a custom event on a component, it is necessary to have a fake event source and invoke it along with the custom event.
            We can also access the state inside the component which would have changed after the custom event was triggerred.*/
        it('should call the handleChange event and update the state in the component', () => {
            const wrapper = shallow(<FormComponent />);
            const fakeCallback = { target: {id: 'contact_name' ,value: 'contact name'}};
            wrapper.find(Input).first().prop('handleChange')(fakeCallback)
            expect(wrapper.state('contact_name')).toBe('contact name');
        })
    });
})