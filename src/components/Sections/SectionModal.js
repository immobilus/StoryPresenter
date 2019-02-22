import React from 'react'
import Modal from 'react-modal'
import Introduction from './Introduction/Introduction'
import Story from './Story/Story'
import Conclusion from './Conclusion/Concusion'

const SectionModal = (props) => {
	
	const activeSection = props.activeSection

	if (activeSection === 'Introduction') {
		return	(
			<Modal
				isOpen={props.modalIsOpen}
				contentLablel={props.section}
				ariaHideApp={false}
			>
				<Introduction activeSection={props.activeSection} />
				<button onClick={props.handleEndSection}>Close</button>
	
			</Modal>
		)
	} else if (activeSection === 'Story') {
		return (
			<Modal
				isOpen={props.modalIsOpen}
				contentLablel={props.section}
				ariaHideApp={false}
			>
				<Story activeSection={props.activeSection} />
				<button onClick={props.handleEndSection}>Close</button>
			</Modal>
		)
	} else if (activeSection === 'Conclusion') {
		return (
			<Modal
					isOpen={props.modalIsOpen}
					contentLablel={props.section}
					ariaHideApp={false}
				>
					<Conclusion activeSection={props.activeSection} />
					<button onClick={props.handleEndSection}>Close</button>
		
				</Modal>
		)
	}
}

export default SectionModal