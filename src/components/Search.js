import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import searchIcon from '../assets/searchIcon.png';
import searchResults from '../assets/searchResults.json'

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
    const output = searchResults[input]
  }
}

export default Search;
