import React from 'react';
import './Style.css';

class Dropdown extends React.Component {
    constructor() {
        super();


        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div className="dropdown" style={{ background: "red", width: "200px" }}>
            <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
            //<div className="button" onClick={this.showDropdownMenu}> My Setting </div>
                
                {this.state.displayMenu ? (
                <ul>
                    <li>Sitefinity</li>
                    <li>Web</li>
                    <li>BI</li>
            </ul>
             ):
            (
                    null
            )
                }

            </div>
            );
        }
    }

export default Dropdown;