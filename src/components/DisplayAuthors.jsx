import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayCookbooks from './DisplayCookbooks';

const DisplayAuthors = (props) => {
	const authors = props.authors;
	console.log('DisplayAuthors authors:', authors);

	const loadAuthors = () => {
		const authorsJSX = authors.map((author, index) => {
			return (
				<article
					key={index}
					style={{ border: '1px solid', margin: '0px 50px' }}>
					<h4>
						#{index + 1} {author.firstName} {author.lastName}&nbsp;&nbsp;
						{/* <button
							onClick={() => {
								props.selectDog(dog);
								props.history.push('/edit');
							}}>
							Edit
						</button>
						<button
							onClick={() => {
								props.deleteDog(dog);
							}}>
							Delete
						</button> */}
					</h4>
					{author.cookbooks.length > 0 ? (
						<DisplayCookbooks cookbooks={author.cookbooks} />
					) : (
						<></>
					)}
				</article>
			);
		});

		return authorsJSX;
	};

	const displayAuthors =
		authors.length > 0 ? loadAuthors() : <h3>Loading...</h3>;
	return (
		<div>
			<h2>Authors</h2>
			<Link to='/add-authors'>
				<button>Add Author</button>
			</Link>
			{displayAuthors}
		</div>
	);
};

export default DisplayAuthors;
