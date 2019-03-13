import React from 'react'
import Section from './Section'

const Sections = (props) => {
 	return (
		<div className="widget">
			{
				props.sections.map((section) => {
					return (
							<Section 
								key={section} 
								section={section}
								activeSection={props.activeSection}
								completedSections={props.completedSections}
								handleBeginSection={props.handleBeginSection} 
							/>
					)
				})
			}
		</div>
	)
}

export default Sections