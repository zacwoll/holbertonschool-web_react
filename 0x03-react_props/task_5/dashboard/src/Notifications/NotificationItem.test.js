import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders an <NotificationItems /> component', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <NotificationItem /> component with type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.props()[ 'data-notification-type' ]).toEqual('default');
        expect(wrapper.text()).toEqual('test');
        expect(wrapper.html()).toContain('<li data-notification-type="default"');
        expect(wrapper.html()).toContain('test</li>');
    });

    it('renders an <NotificationItem /> component checking for html pass through', () => {
        const wrapper = shallow(<NotificationItem html={ { __html: '<u>test</u>' } } />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});
