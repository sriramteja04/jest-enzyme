import React from 'react';
import {shallow} from 'enzyme';

import Congrats from './Congrats';
import {findByDataTest, checkProps} from '../../../../util/testing_util';

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
            expect(component.text()).toContain('');
        });

        it('renders non-empty congrats message `success` prop is true', () => {
            wrapper = setUp({success: true});
            const message = findByDataTest(wrapper, 'congrats-message');
            expect(message.text().length).not.toBe(0);
        });
    });

    describe('Congrats Prop-Types', () => {
        
        it('should always recieve prop-type for success as boolean', () => {
            const expectedProp = {
                success: false
            };
            checkProps(Congrats, expectedProp);
        });
    })
});