import React, { useState } from 'react';
import Dropdown from './DropDown.js'

export default function ConditionalDropdown() {
    const [dropdown2, setDropdown2] = useState();
    const [dropdown3, setDropdown3] = useState();

    const handleChange = (value) => {
        setDropdown2(value);
    }

    const handleChange2 = (value) => {
        setDropdown3(value);
        console.log(value);
    }

    const dropdown2Options = {
        Sitefinity: ["Blog", "Product", "Search"],
        Web: ["Navigation", "Detail Page", "Listing Page"]
    }

    const dropdown3Options = {
        Blog: ["Blog Detail Page", "Author Name", "Date"]
    }

    return (
        <>
            <h1>Gherkin Generator</h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dropdown title="Title" onChange={handleChange} options={["Sitefinity", "Web", "BI", "eCommerce"]} /> 


            {
                dropdown2 && 
                <>
                <Dropdown title="Title" onChange={handleChange2} options={dropdown2Options[dropdown2]} />
                   
                </>
            }


            {
                dropdown3 &&
                <>
                <Dropdown title="Title" options={dropdown3Options[dropdown3]} />
                    </>
            }


            </div>
        </>

    )
}
