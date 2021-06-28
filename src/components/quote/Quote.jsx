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
		quote: PropTypes.string,
		character: PropTypes.string,
		image: PropTypes.string,
		characterDirection: PropTypes.string
	}).isRequired
}

export default Quote;

