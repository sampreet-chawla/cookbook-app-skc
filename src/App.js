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

	const getAuthors = () => {
		axios
			.get(url + '/authors/')
			//.then((res) => res.json())
			.then((data) => {
				setAuthors(data.data ? data.data.data : []);
				console.log('App data: ', data.data);
			});
	};

	const handleGetCookbooks = () => {
		axios
			.get(url + '/cookbooks/')
			.then((res) => res.json())
			.then((data) => setCookbooks(data.data ? data.data : []));
	};

	useEffect(getAuthors, []);

	return (
		<Router>
			<Switch>
				<Route exact={true} path='/'>
					<Home />
				</Route>
				<Route
					exact={true}
					path='/authors'
					render={(rp) => <DisplayAuthors {...rp} authors={authors} />}></Route>
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
