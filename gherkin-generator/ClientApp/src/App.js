import React, { Component } from 'react';
import './custom.css';
import ConditionalDropdown from './components/ConditionalDropdown';
import SitefinityFeatureDropdown from './components/SitefinityFeatureDropdown';
import DropDownGroup from './components/MoreDropdowns';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
       <ConditionalDropdown/>
    );
  }
}
