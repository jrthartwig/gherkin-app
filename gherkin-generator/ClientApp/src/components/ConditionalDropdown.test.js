import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ConditionalDropdown from './ConditionalDropdown.js';

describe("The conditional dropdown component", () => {
    let _component 
    beforeEach(() => {
        _component = shallow(<ConditionalDropdown />)
    }) 
    it("exists", () => {
        expect(_component).toBeDefined();
    });
}); // describe takes a string and a method 