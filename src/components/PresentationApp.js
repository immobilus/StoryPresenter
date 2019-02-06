import React from 'react'
import Header from './Header'
import Sections from './Sections/Sections'
import SectionModal from './Sections/SectionModal'

/* Class Property Methods - Requires Babel Phase 2 plugin: babel-plugin-transform-class-properties */

export default class PresentationApp extends React.Component {
	state = {
		sections: ['Introduction', 'Story', 'Conclusion'],
		showModal: false
	}
	handleBeginSection = (e, section) => {
		e.preventDefault()
		this.setState((prevState) => ({ selectedSection: !prevState }))
		switch (section) {
			case 'Introduction':
				console.log(section)
				return (
					<SectionModal section={section} modalIsOpen={this.state.showModal} contentLabel={section} />
				)
			case 'Story':
				console.log(section)
				return (
					<SectionModal section={section} modalIsOpen={this.state.showModal} contentLabel={section} />
				)
			case 'Conclusion':
				console.log(section)
				return (
					<SectionModal section={section} modalIsOpen={this.state.showModal} contentLabel={section} />
				)
		}
	}
	handleEndSection(section) {
		console.log(section)
		return
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

