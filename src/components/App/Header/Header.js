import React from 'react';
import NavigationList from '../../Navigation/NavigationList/NavigationList'
import {Link} from 'react-router-dom'
import './Header.css'

const header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<Link to={`${process.env.PUBLIC_URL}/`} className="logo">
					<span className="bracket">{'{'}</span>
					<span className="css"> CSS: </span>
					<span className="it">io </span>
					<span className="bracket">{'}'}</span>
				</Link>
				<NavigationList/>
			</div>
		</header>
	)
}

export default header;