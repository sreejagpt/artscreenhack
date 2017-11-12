import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artForm: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  personalWebsite: PropTypes.string.isRequired,
}).isRequired;
