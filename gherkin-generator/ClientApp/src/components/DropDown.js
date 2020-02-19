import React, { useState } from 'react';
import './Style.css';

function Dropdown(props) {

    const [value, setValue] = useState();

    const handleChange = (e) => {
        console.log(e.target.value); //log the value that was selected 
        setValue(e.target.value); // set value = to the item that was clicked because hooray use state 
        props.onChange(e.target.value); // what happens when the target changes 
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
