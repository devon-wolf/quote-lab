import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';

export default function SimpsonsQuote() {
	
	const [quote, setQuote] = useState({});

	const handleLoadClick = async () => {
		setQuote({
			quote: 'lalala',
			character: 'lalala',
			image: 'lalalalalalala'
		});
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
