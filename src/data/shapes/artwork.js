import PropTypes from 'prop-types';

export default PropTypes.shape({
  artist: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artForm: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}).isRequired;
