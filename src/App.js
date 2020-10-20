import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';

function App() {
	const emptyCookbook = {
		title: '',
		yearPublished: 0,
	};

	const emptyAuthor = {
		firstName: '',
		lastName: '',
		cookbooks: [],
	};

	const [cookbooks, setCookbooks] = useState(emptyCookbook);
	const [authors, setAuthors] = useState(emptyAuthor);

	return (
		<Router>
			<Switch>
				<Route exact={true} path='/'>
					<Home />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;
