import React from 'react'
import Header from './Header'
import Sections from './Sections/Sections'
import SectionModal from './Sections/SectionModal'

/* Class Property Methods - Requires Babel Phase 2 plugin: babel-plugin-transform-class-properties */

export default class PresentationApp extends React.Component {
    state = {
		
		// All Sections of the Presentation to Display

		sections: ['Introduction', 'Story', 'Conclusion'],

		// Whether the Modal should be opened or closed

		modalIsOpen: false,

		// Tells the Modal which content to open when you 'begin' a section.

		activeSection: 'Introduction',

		// Tells the app which sections have been completed, so incomplete sections can be disabled
		// and going bnack to a prior section will not reset the enabled buttons.
		// When the button for the introduction is set, the array will acquire that section. 

		completedSections: []
    }
    handleBeginSection = (section) => {

		// Opens the Modal when 'Begin' button is pressed, and tells the Modal the section beginning

        this.setState((prevState) => ({
            modalIsOpen: !!prevState,
            activeModal: section
		}))

		// Will tell the Modal what content to render based on the current activeSection
		
		if (this.state.activeSection === 'Introduction') {

		}
	}
	afterBeginSection = () => {
	
	}

    handleEndSection = () => {
		
		// When a section ends, add the section to the completedSections array

		if (this.state.completedSections.length = 0) {
			this.setState(() => ({
				completedSections: ['Introduction']
			}))
		} else if (this.state.completedSections.length = 1) {
			
			this.setState(() => ({
				completedSections: ['Introduction', 'Story']
			}))
		} else {
			this.setState(() => ({
				completedSections: ['Introduction', 'Story', 'Conclusion']
			}))
		}

		// When a section ends, set the activeSection so the next section can render in the Modal.

		if (this.state.activeSection === 'Introduction') {
			this.setState(() => ({
				activeSection: 'Story'
			}))
		} else if (this.state.activeSection === 'Story') {
			this.setState(() => ({
				activeSection: 'Conclusion'
			}))
		}

		// When a section ends, close the Modal. 
		
		this.setState((prevState) => ({
			modalIsOpen: !prevState,
			activeModal: null
		}))
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div>
                        <Sections 
							className="widget" 
							sections={this.state.sections} 
							activeSection={this.state.activeSection}
							handleBeginSection={this.handleBeginSection} />
                    </div>
                </div>
                <SectionModal 
					modalIsOpen={this.state.modalIsOpen}  
					activeSection={this.state.activeSection} 
					completedSections={this.state.completedSections} 
					handleBeginSection={this.handleBeginSection}
					handleEndSection={this.handleEndSection}/>
            </div>
        )
    }
}