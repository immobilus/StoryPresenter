import React from 'react'
import Modal from 'react-modal'

const SectionModal= (props) => (
	<Modal 
		className="modal" 
		section={props.section}
		isOpen={true}
		contentLabel={props.section}
		>
		<h1>This is the {props.section} modal.</h1>
		<p>Here, there will be information about the {props.section} section.</p>
	</Modal>
)

export default SectionModal