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
      searchInput: ''
    };
  }

  onInputChange = event => this.setState({ searchInput: event.target.value });

  performSearch = (e) => {
    if (e.key === 'Enter') {
      this.props.search(this.state.searchInput.toLowerCase());
    }
  }

  render = () => (
    <div className="Aligner">
      <img src={logo} width="30%" alt="Metamorf. A machine learning smart bridge to help you find original Australian content to adapt." />
      <input
        type="text"
        className="Search"
        name="search"
        autoComplete="off"
        placeholder="Get Inspired..."
        onKeyPress={this.performSearch}
        onChange={this.onInputChange}/>
      <div className="hintText">(Currently supported terms: the handmaid's tale, moonlight, blade runner)</div>
      <img src={areaInfo} width="70%" alt="Australian art near you."></img>
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
