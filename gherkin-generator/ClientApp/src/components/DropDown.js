import React, { useState } from 'react';
import './Style.css';

function Dropdown(props) {

    const [value, setValue] = useState();

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        props.onChange(e.target.value);
    }



    return (
        <>
            <div className="dropdown">
                <select onChange={handleChange} value={value}>
                   
                    {
                        props.options &&
                        props.options.map((item, key) => (
                            <option key={key} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}
export default Dropdown
