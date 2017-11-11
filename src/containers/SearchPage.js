import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doSearch } from '../reducers/search';
import searchIcon from '../assets/searchIcon.png';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  onInputChange = event => this.setState({ searchInput: event.target.value });

  loadSearchPage = () => this.props.search(this.state.searchInput);

  render = () => (
    <div>
      <input type="text" name="search" value={this.state.searchInput} onChange={this.onInputChange} />
      <button onClick={this.loadSearchPage}>
        <img src={searchIcon} width="10px" height="10px" alt="" />
      </button>
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