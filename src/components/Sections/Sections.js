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
							handleBeginSection={props.handleBeginSection} />
					)
				})
			}
		</div>
	)
}

export default Sections