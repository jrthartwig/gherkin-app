import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dropdown from './components/DropDown';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const globalHandler = (item) => { console.log("hi " + item) };


ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
    rootElement);

var displayDropdown = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown title="Title" handler={globalHandler} options={["Sitefinity", "Web", "BI", "eCommerce"]} /> {/*Dropdown is being rendered here with the list of "options" from props options "mapping" which returns the array of inline specified "options" */}

    </div>
);

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();



