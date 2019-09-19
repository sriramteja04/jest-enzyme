import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import {findByDataTest} from '../../../../util/testing/findByAttr';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setUp = (props={}, state=null) => {
    return shallow(<Congrats {...props} />)
}

describe('Testing <Congrats /> Component', () => {
    
    describe('Rendering intial elements', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        
        it('renders without error', () => {
            const congrats = findByDataTest(wrapper,'congrats-component');
            expect(congrats.length).toBe(1);
        });

        it('renders no text when `success` prop is false', () => {
            wrapper = setUp({success: false});
            const component = findByDataTest(wrapper, 'congrats-component');
            expect(component.text()).toContain('')
        });

        it('renders non-empty congrats message `success` prop is true', () => {
            wrapper = setUp({success: true});
            const message = findByDataTest(wrapper, 'congrats-message');
            expect(message.text().length).not.toBe(0)
        });
    })
})