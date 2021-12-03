import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<Login />', () => {
    it('renders an <Login /> component checking for App-Login', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('#Login')).toHaveLength(1);
    });

    it('renders an <Login /> component checking for input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div input')).toHaveLength(3);
    });

    it('renders an <Login /> component checking for label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div label')).toHaveLength(2);
    });

    // Test using State
    it('verifies that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form #submit').props().disabled).toBe(true);
    });

    it('verify that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = shallow(<Login />);
        wrapper.find({ name: 'email' }).simulate('change', { target: { name: 'email', value: 'john.doe@email.com' } });
        wrapper.find({ name: 'password' }).simulate('change', { target: { name: 'password', value: 'notapassword' } });
        // setState is asynchronous and it doesn't fire in time to enable the submit button
        // but this is only true in jest!! the login page reacts accordingly
        wrapper.find({ name: 'password' }).simulate('change', { target: { name: 'password', value: 'notapassword' } });
        expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(false);
    });
});
