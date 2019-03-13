import React from 'react'
import Modal from 'react-modal'
import Introduction from './Introduction/Introduction'
import DisabilityDiscrimination from './DisabilityDiscrimination/Disability'
import MCOM5310 from './MCOM 5310/MCOM5310'
import MCOM5332 from './MCOM 5332/MCOM5332'
import Conclusion from './Conclusion/Concusion'

const SectionModal = (props) => {
	
	const activeSection = props.activeSection

	if (activeSection === 'Introduction') {
		return	(
			<Modal
				isOpen={props.modalIsOpen}
				activeSection={activeSection}
				contentLabel={activeSection}
				ariaHideApp={false}
			>
				<Introduction activeSection={activeSection} />
				<button activeSection={activeSection} onClick={props.handleEndSection}>Close</button>
	
			</Modal>
		)
	} else if (activeSection === 'Disability Discrimination') {
		return (
			<Modal
				isOpen={props.modalIsOpen}
				activeSection={activeSection}
				contentLabel={activeSection}
				ariaHideApp={false}
			>
				<DisabilityDiscrimination activeSection={activeSection} />
				<button activeSection={activeSection} onClick={props.handleEndSection}>Close</button>
			</Modal>
		)
	} else if (activeSection === 'MCOM 5310') {
		return (
			<Modal
				isOpen={props.modalIsOpen}
				activeSection={activeSection}
				contentLablel={activeSection}
				ariaHideApp={false}
			>
				<MCOM5310 activeSection={activeSection} />
				<button activeSection={activeSection} onClick={props.handleEndSection}>Close</button>
			</Modal>
		)
	} else if (activeSection === 'MCOM 5332') {
		return (
			<Modal
				isOpen={props.modalIsOpen}
				activeSection={activeSection}
				contentLablel={activeSection}
				ariaHideApp={false}
			>
				<MCOM5332 activeSection={props.activeSection} />
				<button activeSection={activeSection} onClick={props.handleEndSection}>Close</button>
			</Modal>
		)
	} else if (activeSection === 'Conclusion'){
		return (
				<Modal
					isOpen={props.modalIsOpen}
					activeSection={activeSection}
					contentLablel={activeSection}
					ariaHideApp={false}
				>
					<Conclusion activeSection={activeSection} />
					<button activeSection={activeSection} onClick={props.handleEndSection}>Close</button>
				</Modal>
		)
	}
}

export default SectionModal