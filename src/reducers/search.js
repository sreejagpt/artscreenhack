import { push } from 'react-router-redux';
import { keys, includes } from 'lodash';
import searchResults from '../data/searchResults.json';

const initialState = {
  searchInput: '',
  searchOutput: [],
  error: null
};

const validSearchInputs = keys(searchResults);

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        searchInput: action.searchInput,
        error: action.error
      };

    case SEARCH_INVALID:
      return {
        ...state,
        searchInput: action.searchInput,
        error: action.error
      };

    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        searchOutput: action.searchOutput,
        error: action.error
      };

    default:
      return state;
  }
};

const SEARCH_START = 'SEARCH_START';
const SEARCH_INVALID = 'SEARCH_INVALID';
const SEARCH_SUCCESSFUL = 'SEARCH_SUCCESSFUL';

export const doSearch = dispatch => searchInput => {
  dispatch({ type: SEARCH_START });
  if (!includes(validSearchInputs, searchInput)) {
      dispatch({ type: SEARCH_INVALID, error: `Currently Metamorf only supports the following options: ${validSearchInputs}` })
  } else {
    dispatch({ type: SEARCH_SUCCESSFUL, searchOutput: searchResults[searchInput] });
    dispatch(push('/artworks'));
  }
};
