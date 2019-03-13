import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sections from './Sections/Sections'
import SectionModal from './Sections/SectionModal'

/* Class Property Methods - Requires Babel Phase 2 plugin: babel-plugin-transform-class-properties */

export default class WarneAppeal extends React.Component {
    state = {
		
		// All Sections of the Presentation to Display

		sections: [/*'Introduction', */'Disability Discrimination', 'MCOM 5310', 'MCOM 5332', 'Conclusion'],

		// Whether the Modal should be opened or closed

		modalIsOpen: false,

		// Tells the Modal which content to open when you 'begin' a section.

		/*activeSection: 'Introduction', */

		// Tells the app which sections have been completed, so incomplete sections can be disabled
		// and going bnack to a prior section will not reset the enabled buttons.
		// When the button for the introduction is set, the array will acquire that section. 

		completedSections: []
    }
    handleBeginSection = (section) => {
        this.setState((prevState) => ({
			activeSection: section,
            modalIsOpen: !!prevState
		}))	
	}
	
	afterBeginSection = () => {

		// After-open Modal code
	}

    handleEndSection = () => {
		
		// When a section ends, add the section to the completedSections array

		if (this.state.completedSections.length = 0) {
			this.setState(() => ({
				completedSections: ['Introduction']
			}))
		} else if (this.state.completedSections.length = 1) {
			this.setState(() => ({
				completedSections: ['Introduction', 'Disability Discrimination']
			}))
		} else if (this.state.completedSections.length = 2) {
			this.setState(() => ({
				completedSections: ['Introduction', 'Disability Discrimination', 'MCOM 5310']
			}))
		} else if (this.state.completedSections.length = 3) {
			this.setState(() => ({
				completedSections: ['Introduction', 'Disability Discrimination', 'MCOM 5310', 'MCOM 5332']
			}))
		} else {
			this.setState(() => ({
				completedSections: ['Introduction', 'Disability Discrimination', 'MCOM 5310', 'MCOM 5332', 'Conclusion']
			}))
		}

		// When a section ends, close the Modal. 
		
		this.setState((prevState) => ({
			modalIsOpen: !prevState
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
				<Footer />
            </div>
        )
    }
}