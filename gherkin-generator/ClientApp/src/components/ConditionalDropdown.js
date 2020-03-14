import React, { useState } from 'react';
import './Style.css';
import { headers } from '../adalHeaders';


export default function ConditionalDropdown(props) {
    const [items, setItems] = useState([]);
    const [stories, setStories] = useState([]);
    const [gherkin, setGherkin] = useState(); 

    const handleProjectChange = (e) => {
        fetch(`https://localhost:44347/api/Feature?projectType=${e.target.value}`, {    //hitting my API with implied "GET" 
            headers: {                                                                  // sending parameters in the header 
                'Content-Type': 'application/json',
                ...headers                                                              // "..." = "rest spread operator"
            },
        })
            .then(res => { return res.json() })                                         // handling the promise
            .then(data => {     
                setItems(data)                                                          //useState setting the items = to the data from the response
            })
            .catch(e => console.log(e));                                                //catching the response 
    };

    const handleFeatureChange = (e) => {
        fetch(`https://localhost:44347/api/Story?feature=${e.target.value}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => { return res.json() })
            .then(data => {
                setStories(data)
            })
            .catch(e => console.log(e));
    };

    const handleStoryChange = (e) => {
        fetch(`https://localhost:44347/api/Story?feature=${e.target.value}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(res => { return res.json() })
            .then(data => {
                setGherkin(data)
            })
        console.log(e);
    };

    


    return (
        <>
            <h1 className="heading-one">Gherkin Generator</h1>
            <div className="flex space-between align-center">   
                <div className="select-wrapper">
                    <select className="dropdown" onChange={handleProjectChange}>
                        <option>Select...</option>
                        <option>Sitefinity</option>
                        <option>Web</option>
                        <option>BI</option>
                    </select>
                </div>

                <div className="select-wrapper">
                    <select onChange={handleFeatureChange}>
                        <option>Select...</option>
                        {
                            items.map((item, key) =>
                                <option key={key} value={item.id}>
                                    {item.name}
                                </option>
                            )
                        }
                    </select>
                </div>

                <div className="select-wrapper">
                    <select onChange={handleStoryChange}>
                        <option>Select...</option>
                        {
                            stories.map((item, key) =>
                                <option key={key} value={item.id}>
                                    {item.title}
                                </option>
                            )
                        }
                    </select>
                </div>



            </div>
        </>
    )
}
