import React from 'react'

const Introduction = (props) => {
	return (
		<div>
			<h1>Introduction</h1>
			<p>This bit of content comes fropm the {props.activeSection}.js component.</p>
			<p>Introduction content hard-coded here.</p>
		</div>
	)
}

export default Introduction