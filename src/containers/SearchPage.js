import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doSearch } from '../reducers/search';
import searchIcon from '../assets/searchIcon.png';
import logo from '../assets/metamorf.png';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  onInputChange = event => this.setState({ searchInput: event.target.value });

  loadSearchPage = (e) => {
     if (e.key === 'Enter') {
       this.props.search(this.state.searchInput);
     }
  }

  render = () => (
    <div className="Aligner">
      <img src={logo} width='30%'></img>
      <input
        type="text"
        className="Search"
        name="search"
        placeholder="Get Inspired..."
        onKeyPress={this.loadSearchPage}
        onChange={this.onInputChange}/>
    </div>
  );
}

SearchPage.propTypes = {
  search: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  search: dispatch(doSearch),
});

export default connect(null, mapDispatchToProps)(SearchPage);
