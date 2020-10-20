import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAuthors = () => {
	return (
		<div>
			<h1>Authors</h1>
			<Link to='/add-authors'>
				<h3>Add Author</h3>
			</Link>            
		</div>
	);
};

export default DisplayAuthors;