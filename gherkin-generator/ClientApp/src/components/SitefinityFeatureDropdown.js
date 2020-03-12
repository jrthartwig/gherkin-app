import React, { useState, useEffect } from 'react';
import './Style.css';

export default function SitefinityFeatureDropdown(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44347/api/Feature?projectType=Sitefinity", {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(res => { return res.json() })
            .then(data => {
                setItems(data)
            })

    }, []);

    return (
        <>

            <h1>Gherkin Generator</h1>
            <select>
                    {
                        items.map((item, key) =>
                            <option key={key} value={item.id}>
                                {item.name}
                            </option>
                        )
                    }
                    </select>
            }
        </>
    )
};