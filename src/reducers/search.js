import { push } from 'react-router-redux';
import searchResults from '../data/searchResults.json';

const initialState = {
  searchInput: '',
  searchOutput: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        searchInput: action.searchInput,
      };

    case SEARCH_SUCCESSFUL:
      return {
        ...state,
        searchOutput: action.searchOutput,
      };

    default:
      return state;
  }
};

const SEARCH_START = 'SEARCH_START';
const SEARCH_SUCCESSFUL = 'SEARCH_SUCCESSFUL';

export const doSearch = dispatch => searchInput => {
  dispatch({ type: SEARCH_START });
  dispatch({ type: SEARCH_SUCCESSFUL, searchOutput: searchResults[searchInput] });
  dispatch(push('/artworks'));
};

