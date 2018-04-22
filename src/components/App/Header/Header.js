import React from 'react';
import NavigationList from '../../Navigation/NavigationList/NavigationList'
import {Link} from 'react-router-dom'
import './Header.css'

const header = (props) => {
	return (
		<header className="site-header">
			<div className="container">
				<Link to="/" className="logo">
					<span className="io">.io </span>
					<span className="bracket">{'{'}</span>
					<span className="css"> CSS: </span>
					<span className="it">it </span>
					<span className="bracket">{'}'}</span>
				</Link>
				<NavigationList/>
			</div>
		</header>
	)
}

export default header;