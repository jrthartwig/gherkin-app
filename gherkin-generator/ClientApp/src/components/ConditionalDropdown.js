import React, { useState } from 'react';
import './Style.css';


export default function ConditionalDropdown(props) {
    const [items, setItems] = useState([]);
    const [stories, setStories] = useState([]);

    const handleProjectChange = (e) => {
        var temp = e.target.value
        fetch(`https://localhost:44347/api/Feature?projectType=${temp}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(res => { return res.json() })
            .then(data => {
                setItems(data)
            })
        console.log(e);
    };

    const handleFeatureChange = (e) => {
        var temp2 = e.target.value
        fetch(`https://localhost:44347/api/Story?feature=${temp2}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(res => { return res.json() })
            .then(data => {
                setStories(data)
            })
        console.log(e);
    };

    return (
        <>
            <h1>Gherkin Generator</h1>
            <div>
                <select class="dropdown" onChange={handleProjectChange}>
                    <option>Select...</option>
                    <option>Sitefinity</option>
                    <option>Web</option>
                    <option>BI</option>
                </select>


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

                <select>
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


        </>

    )
}
