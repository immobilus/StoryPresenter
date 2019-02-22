import React from 'react'

const Story= (props) => {
	return (
		<div>
			<h1>Introduction</h1>
			<p>This bit of content comes fropm the {props.activeSection}.js component.</p>
		</div>
	)
}

export default Story