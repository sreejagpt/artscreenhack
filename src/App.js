import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Search } from './components/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Search/>
    );
  }
}

export default App;
