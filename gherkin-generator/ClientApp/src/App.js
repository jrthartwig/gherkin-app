import React from 'react';
import './custom.css';
import ConditionalDropdown from './components/ConditionalDropdown';

function App(props) {

    return (
        <div className="gherkin-generator">
            {
                <ConditionalDropdown />
            }
        </div>
    );

}

export default App