import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dropdown from './components/ProjectDropDown';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
    rootElement);

var displayDropdown = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown />
    </div>
);

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();



