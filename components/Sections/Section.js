import React from 'react'

const Section = (props) => {
	return (
		<div className="section">
			<p className="section__text">{props.section}</p> 
			<button 
				className="button" 
				onClick={() => {
					props.handleBeginSection()
				}}>
					Begin
			</button>
		</div>
	)
}

export default Section