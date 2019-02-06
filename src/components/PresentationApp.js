import React from 'react'
import Header from './Header'
import Sections from './Sections/Sections'
import SectionModal from './Sections/SectionModal'

/* Class Property Methods - Requires Babel Phase 2 plugin: babel-plugin-transform-class-properties */

export default class PresentationApp extends React.Component {
	state = {
		sections: ['Introduction', 'Story', 'Conclusion'],
		selectedSection: undefined
	}
	handleBeginSection = (section) => {
		this.setState((prevState) => ({ selectedSection: !!prevState }))
		switch (section) {
			case 'Introduction':
				console.log(section)
				return (
					<SectionModal section={section} isOpen={this.state.selectedSection} />
				)
			case 'Story':
				console.log(section)
				return (
					<SectionModal section={section} isOpen={this.state.selectedSection} />
				)
			case 'Conclusion':
				console.log(section)
				return (
					<SectionModal section={section} isOpen={this.state.selectedSection} />
				)
		}
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem('sections')
			const sections = JSON.parse(json)
			if (sections) {
				this.setState(() => ({ sections }))
			}
		} catch (err) {
			
		}	
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.sections.length !== this.state.sections.length) {
			const json = JSON.stringify(this.state.sections)
			console.log(`Saving data.`)
			localStorage.setItem('sections', json)
		}
	}
	render() {
		const subtitle = "\"One cannot conceive of objectivity without subjectivity.\" - Paulo Freire, Pedagogy of the Oppressed"
		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<div>
						<Sections className="widget" sections={this.state.sections} handleBeginSection={this.handleBeginSection} />
					</div>
				</div>
			</div>
		)
	}
}

