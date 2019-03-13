import React from 'react'

const Conclusion= (props) => {
	return (
		<div>
			<h1>Conclusion</h1>
			<p>This bit of content comes fropm the {props.activeSection}.js component.</p>
			<p>Conclusion content hard-coded here.</p>
		</div>
	)
}

export default Conclusion