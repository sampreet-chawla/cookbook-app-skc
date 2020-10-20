import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import DisplayAuthors from './components/DisplayAuthors';
import DisplayCookbooks from './components/DisplayCookbooks';
import DisplayAuthorForm from './components/DisplayAuthorForm';

function App() {
	//const url = 'https://cookbook-api-skc.herokuapp.com/api';
	const url = 'http://localhost:4000/api';

	const emptyCookbook = {
		title: '',
		yearPublished: 0,
	};

	const emptyAuthor = {
		firstName: '',
		lastName: '',
		cookbooks: [],
	};

	const [cookbooks, setCookbooks] = useState([]);
	const [authors, setAuthors] = useState([]);

	const [selectedAuthor, setSelectedAuthor] = useState(emptyAuthor);
	const [selectedACookbook, setSelectedCookbook] = useState(emptyCookbook);

	const getAuthors = () => {
		axios
			.get(url + '/authors/')
			//.then((res) => res.json())
			.then((data) => {
				setAuthors(data.data ? data.data.data : []);
				console.log('App data: ', data.data);
			});
	};

	useEffect(getAuthors, []);

	// const handleGetCookbooks = () => {
	// 	axios
	// 		.get(url + '/cookbooks/')
	// 		.then((res) => res.json())
	// 		.then((data) => setCookbooks(data.data ? data.data : []));
	// };

	// handle function for creating dogs
	const handleCreateAuthor = (newAuthor) => {
		axios({
			url: url + '/authors/',
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify(newAuthor),
		}).then((data) => getAuthors());
	};

	const selectAuthor = (author) => {
		setSelectedAuthor(author);
	};

	// //HandleUpdate to to update the author when form is submitted
	const handleUpdateAuthor = (author) => {
		console.log('App selectedAuthor: ', author);
		axios({
			url: url + '/authors/id/' + author._id,
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify(author),
		}).then((data) => getAuthors());
	};

	// // Delete Author function
	const deleteAuthor = (author) => {
		axios({
			url: url + '/authors/id/' + author._id,
			method: 'delete',
		}).then((data) => getAuthors());
	};

	return (
		<Router>
			<Switch>
				<Route exact={true} path='/'>
					<Home />
				</Route>
				<Route
					exact={true}
					path='/authors'
					render={(rp) => (
						<DisplayAuthors
							{...rp}
							authors={authors}
							selectAuthor={selectAuthor}
							deleteAuthor={deleteAuthor}
						/>
					)}></Route>
				<Route
					exact
					path='/add-author'
					render={(rp) => (
						<DisplayAuthorForm
							{...rp}
							label='Add Author'
							author={emptyAuthor}
							handleSubmit={handleCreateAuthor}
						/>
					)}
				/>
				<Route
					exact
					path='/edit-author'
					render={(rp) => (
						<DisplayAuthorForm
							{...rp}
							label='Edit Author'
							author={selectedAuthor}
							handleSubmit={handleUpdateAuthor}
						/>
					)}
				/>
				<Route
					exact={true}
					path='/cookbooks'
					render={(rp) => (
						<DisplayCookbooks {...rp} cookbooks={cookbooks} />
					)}></Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
