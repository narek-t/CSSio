import React, {Component} from 'react'
import ContactForm from '../../ContactForm/ContactForm'
import './Index.css'

class IndexPage extends Component {
	state = {
		displayContactForm: false,
	}

	handleClick = (e) => {
		e.preventDefault()
		this.setState({displayContactForm: !this.state.displayContactForm})
	};

	handleClose = () => {
		this.setState({displayContactForm: false})
	};

	render() {
		return (
			<main className="main-content indexpage one-page">
				<div className="index-info">
					<h1>What is this?</h1>
					<p><strong>CSSio</strong> is a free tool that lets you convert your ideas to CSS :)<br /> </p>
					<div className="line">
						<p>Feel free to use all these tools, and contact me (<a href="mailto:nktarverdyan@gmail.com">nktarverdyan@gmail.com</a>) if you have an idea, tell me what kind of tools you want to add to this website.</p>
					</div>
				</div>
				{this.state.displayContactForm ? <ContactForm handleClose={this.handleClose} /> : null }
			</main>
		)
	}
}

export default IndexPage