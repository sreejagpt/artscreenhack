import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import searchIcon from '../assets/searchIcon.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '' };
    this.loadSearchPage = this.loadSearchPage.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" name="search" value = {this.state.searchInput} onChange = {this.onInputChange}/>
        <button onClick = {this.loadSearchPage}>
          <img src={searchIcon} width='10px' height='10px'/>
        </button>
      </div>
    )
  }

  onInputChange(event) {
    this.setState({searchInput: event.target.value})
  }

  loadSearchPage() {
    const input = this.state.searchInput
  }

}

export default Search;
