import React from 'react'
import Modal from 'react-modal'

const SectionModal = (props) => (
	<Modal
		isOpen={props.modalIsOpen}
		contentLabel={props.section}
		ariaHideApp={false}
	>
		<h2>Selected Section</h2>
		<button onClick={props.handleEndSection}>Close</button>
	</Modal>
)

export default SectionModal
