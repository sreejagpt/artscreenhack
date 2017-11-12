import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doSearch } from '../reducers/search';
import logo from '../assets/metamorf.png';
import areaInfo from '../assets/area.png';


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
      this.props.search(this.state.searchInput.toLowerCase());
    }
  }

  render = () => (
    <div className="Aligner">
      <img src={logo} width="30%" alt="" />
      <input
        type="text"
        className="Search"
        name="search"
        autoComplete="off"
        placeholder="Get Inspired..."
        onKeyPress={this.loadSearchPage}
        onChange={this.onInputChange}/>
      <img src={areaInfo} width="70%"></img>
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
