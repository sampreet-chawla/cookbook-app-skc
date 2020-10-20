import React, { useState } from 'react';

const DisplayAuthorForm = (props) => {
	//STATE FOR THE FORM
	const [formData, setFormData] = useState(props.author);

	//FUNCTIONS
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		props.handleSubmit(formData); // Submit to Parents desired function
		props.history.push('/authors'); //Push back to display page
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='firstName'
				value={formData.firstName}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='lastName'
				value={formData.lastName}
				onChange={handleChange}
			/>
			<input
				type='hidden'
				name='_id'
				value={formData._id}
				onChange={handleChange}
			/>
			<input type='submit' value={props.label} />
		</form>
	);
};

export default DisplayAuthorForm;
