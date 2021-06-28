import React from 'react';
import PropTypes from 'prop-types';

function Load({ handleLoadClick }) {
	return (
		<button onClick={handleLoadClick}>
			Get Quotes
		</button>
	);
}

Load.propTypes = {
	handleLoadClick: PropTypes.func.isRequired
}

export default Load;

