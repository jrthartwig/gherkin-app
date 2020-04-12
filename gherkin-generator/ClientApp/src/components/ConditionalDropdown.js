import React, { useState } from 'react';
import './Style.css';
import api from '../services/api';


export default function ConditionalDropdown(props) {
    const [items, setItems] = useState([]);
    const [gherkinIndex, setGherkinIndex] = useState();

    const handleChange = (e) => {
        let uri = e.currentTarget.getAttribute("endpoint")
        let endpoint = `${uri}${e.target.value}`
        api.fetch(endpoint)
            .then(data => setItems(data))                                                         //useState setting the items = to the data from the response
            .catch(e => console.log(e));
    }

    const handleStoryChange = (e) => {
        setGherkinIndex(e.target.value);
    };

    return (
        <>
            <h1 className="heading-one">Gherkin Generator</h1>
            <div className="flex space-between align-center">
                <div className="select-wrapper">
                    <select className="dropdown" onChange={handleChange} endpoint="Feature?projectType=">
                        <option>Select a Project Type...</option>
                        <option>Sitefinity</option>
                        <option>Web</option>
                        <option>BI</option>
                    </select>
                </div>

                <div className="select-wrapper">
                    <select onChange={handleChange} endpoint="Story?feature=">
                        <option>Select a Feature...</option>
                        {
                            items && items.map((item, key) =>
                                <option key={key} value={item.id}>
                                    {item.name}
                                </option>
                            )
                        }
                    </select>
                </div>

                <div className="select-wrapper">
                    <select onChange={handleChange, handleStoryChange}>
                        <option value="">Select a Story...</option>
                        {

                            items && items.map((item, key) =>
                                <option key={key} value={key}>
                                    {item.title}
                                </option>
                            )
                        }
                    </select>
                </div>

                {
                    gherkinIndex &&

                    <div className="gherkin">
                        {items[gherkinIndex].acceptanceCriteria}
                    </div>

                }


            </div>
        </>
    )
}
