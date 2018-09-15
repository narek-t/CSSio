import React from 'react';
import './Footer.css'

const footer = () => {
	return (
		<footer className="site-footer">
			<div className="container cf">
				<div className="copyright">© 2018</div>
				<div className="contacts">
					<a href="https://github.com/narek-t" rel="noopener noreferrer" target="_blank" className="github contact"></a>
					<a href="https://www.linkedin.com/in/narek-t" rel="noopener noreferrer" target="_blank" className="linkedin contact"></a>
					<a href="mailto:narek.tarverdyan@bk.ru" className="email contact"></a>
				</div>
			</div>
		</footer>
	)
}

export default footer