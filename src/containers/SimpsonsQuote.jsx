import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsons-api';

export default function SimpsonsQuote() {
	
	const [quote, setQuote] = useState({});

	const handleLoadClick = () => {
		getQuote().then(result => setQuote(result[0]));
	}

	return (
		<div>
			<Load
				handleLoadClick={handleLoadClick}
			/>
			<Quote 
				data={quote}
			/>		
		</div>
	);
}
