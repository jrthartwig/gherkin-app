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
                simulateDropdownChange(projectDropdown, "Sitefinity");
            });

            it("shows the feature dropdown", () => {
                const sitefinityOptions = ["Blog", "Product", "Search"]
                let featureDropdownOptions = _component.find("select").at(1).find("option");
                expectOptionsToEqual(featureDropdownOptions, sitefinityOptions);
            });
        });
    });

    function simulateDropdownChange(dropdown, value) {
        dropdown.simulate("change", { target: { value } })

    }

    function expectOptionsToEqual(result, expected) {
        for (let i = 0; i < result.lengh; i++) {
            if (result[0].text() !== expected[0])
                return false;
        }
        return true;
    }


});

