import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
			<div>
				<h1>Welcome to Cookbook App</h1>
				<Link to='/authors'>
					<h3>Visit Authors</h3>
				</Link>
				<Link to='/cookbooks'>
					<h3>List Cookbooks</h3>
				</Link>
			</div>
		);
}

export default Home;