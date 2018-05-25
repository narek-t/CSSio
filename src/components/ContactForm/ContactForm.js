import React from 'react'
import './ContactForm.css'

const contactForm = (props) => {
	return (
		<div className="contact-form">
			<div className="contact-form-cover" onClick={props.handleClose}/>
			<div className="contact-form-inner">
				<form>
					<input type="text" placeholder="Name*" className="input"/>
					<input type="email" placeholder="Email*" className="input"/>
					<textarea placeholder="Message*" className="input" />
					<button className="button is-primary add-button">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default contactForm