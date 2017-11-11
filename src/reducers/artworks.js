import { push } from 'react-router-redux';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const viewPage = dispatch => artworkId => {
  dispatch(push(`/artworks/${artworkId}`));
};
