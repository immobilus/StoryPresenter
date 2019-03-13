import React from 'react'

const Section = (props) => {
	const section = props.section
	return (
		<div className="section">
			<p className="section__text">{section}</p> 
			<button 
				className="button" 
				onClick={() => {
					props.handleBeginSection(section)
				}}>
					Begin
			</button>
		</div>
	)
}

export default Section