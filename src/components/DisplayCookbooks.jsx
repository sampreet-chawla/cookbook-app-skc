import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayCookbooks = (props) => {
	const cookbooks = props.cookbooks;
	console.log('DisplayCookbooks cookbooks:', cookbooks);

	const loadCookbooks = () => {
		const cookbooksJSX = cookbooks.map((cookbook, index) => {
			return (
				<article key={index}>
					<p>
						{index + 1}. {cookbook.title}, {cookbook.yearPublished}
					</p>
				</article>
			);
		});

		return cookbooksJSX;
	};

	const displayCookbooks =
		cookbooks.length > 0 ? loadCookbooks() : <h3>Loading...</h3>;
	return (
		<div>
			Cookbooks&nbsp;&nbsp;
			<Link to='/add-cookbooks'>
				<button>Add Cookbook</button>
			</Link>
			{displayCookbooks}
		</div>
	);
};

export default DisplayCookbooks;
