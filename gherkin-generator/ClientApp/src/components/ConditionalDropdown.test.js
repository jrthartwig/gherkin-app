import React, { Component } from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import ConditionalDropdown from './ConditionalDropdown.js';

describe("The conditional dropdown component", () => {  // describe takes a string and a method 
    let _component 

    beforeEach(() => {
        _component = mount(<ConditionalDropdown />)
    });

    it("has a project dropdown", () => {
        const projectDropdowns = _component.find("Dropdown");
        expect(projectDropdowns.length).toEqual(1);
    });

    describe("given a project dropdown", () => {        
        let projectDropdown 

        beforeEach(() => {
            projectDropdown = _component.find("select").at(0);  
        });

        describe("and 'Sitefinity' is selected", () => {
            beforeEach(() => {
                simulateDropdownChange(projectDropdown,"Sitefinity");
            });

            it("shows the feature dropdown", () => {
                let featureDropdown = _component.find("select");
                console.log(featureDropdown);
                expect(featureDropdown.length).toEqual(2);
            });
        });
    });

    function simulateDropdownChange(dropdown, value) {
        dropdown.simulate("change", {target: {value}})

    }


}); 

