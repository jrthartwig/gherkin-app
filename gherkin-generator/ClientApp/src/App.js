import React, { Component } from 'react';
import './custom.css';
import ConditionalDropdown from './components/ConditionalDropdown';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <ConditionalDropdown />
    );
  }
}
