import React from 'react'

const Header = (props) => {
	return (
		<div className="header">
			<div className="container">
				<h1 className="header__title">{props.title}</h1>
				{
					props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>
				}
				{
					props.citation && <h2 className="header__citation">&mdash; {props.citation}</h2>
				}
			</div>
		</div>
	)
}

Header.defaultProps = {
	title: 'Grade Appeal for Warne, J.J.',
	subtitle: '"One cannot conceive of objectivity without subjectivity"',
	citation: 'Paolo Freire',
	secondCitation: 'The Pedagogy of the Oppressed'
}

export default Header