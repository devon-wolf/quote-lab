import React from 'react';
import PropTypes from 'prop-types';

function Quote({ data }) {
	const { quote, character, image } = data;
	return (
		<div>
			<img alt={character} src={image} />
			<p>{quote}</p>
		</div>
	)
}

Quote.propTypes = {
	data: PropTypes.shape({
		quote: PropTypes.string.isRequired,
		character: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		characterDirection: PropTypes.string
	}).isRequired
}

export default Quote;

