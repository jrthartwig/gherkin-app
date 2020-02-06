import React, { useState } from 'react';
import './Style.css';

function Dropdown(props) {
    console.log(props)

    const [displayMenu, setDisplayMenu] = useState(); //this is a variable that is an array that has a value and a function -- this is just how useState works 
    // format is const [value, setValue] = [(ALWAYS)]useState();
    //toggles drop down menu 


    const toggleDropdownMenu = () => {
        setDisplayMenu(!displayMenu) //! is saying do the opposite of the current state 
    }

    const handleClick = (item) => {
        console.log(item)
        props.handler(item)
    }

    return (
        <>
            <div className="dropdown" style={{ background: "#23344d", width: "200px" }}>
                <div className="button" onClick={toggleDropdownMenu}>{props.title}</div>
                {
                    displayMenu &&
                    <ul>
                        {props.options.map(item => {
                            {/* ^^ this is "mapping" options from the props (specified in    */ }
                            return <li key={item} onClick={() => handleClick(item)}>{item}</li> 
                        })}
                    </ul>

                }
            </div>
        </>
    )
}
export default Dropdown
