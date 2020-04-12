import React from 'react';
import api from './api';
import * as adalConfig from '../adalConfig';


describe("the api service", () => {
    beforeEach(() => {
        spyOn(window, "fetch").and.stub();
        //spyOn(adalConfig, "getToken").and.returnValue("faketoken");
        // spyOn(reactAdal, "AuthenticationContext").and.stub();
    
    })

    it("has default options", () => {
        expect(api.options).toEqual({ "headers": { "Authorization": "Bearer null", "Content-Type": "application/json" }, "method": "GET" });
    })
    it("can call to fetch data", () => {
        expect(api.fetch).toBeDefined();
    })
    describe("given a call to fetch data", () => {

        describe("given no endpoint", () => {
            it("does not call to fetch data", () => {
                // arrange

                // act
                api.fetch();

                // assert
                expect(window.fetch).not.toHaveBeenCalled();
            })
        })
        describe("given an endpoint", () => {
            it("calls to fetch data with default options", () => {
                // arrange
               
                // act
                api.fetch("endpoint");

                // assert
                expect(window.fetch).toHaveBeenCalledWith("/api/endpoint",api.options);
            })
        })
        describe("given a request method", () => {
            it("calls to fetch data with that request method", () => {
                api.fetch("endpoint", { method: 'Garden' });
                expect(window.fetch).toHaveBeenCalledWith("/api/endpoint", {headers: api.options.headers, method: 'Garden' })
            })

        })
    })
})