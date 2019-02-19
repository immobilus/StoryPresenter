import React from 'react'
import Header from './Header'
import Sections from './Sections/Sections'
import SectionModal from './Sections/SectionModal'

/* Class Property Methods - Requires Babel Phase 2 plugin: babel-plugin-transform-class-properties */

export default class PresentationApp extends React.Component {
    state = {
        sections: ['Introduction', 'Story', 'Conclusion'],
		modalIsOpen: false,
		activeSection: 'Introduction'
    }
    handleBeginSection = (section) => {
        this.setState((prevState) => ({
            modalIsOpen: !!prevState,
            activeModal: section
		}))
		
		if (this.state.activeSection === 'Introduction') {

		}
	}
	afterBeginSection = () => {
	
	}

    handleEndSection = () => {
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
                <SectionModal modalIsOpen={this.state.modalIsOpen} handleEndSection={this.handleEndSection} />
            </div>
        )
    }
}