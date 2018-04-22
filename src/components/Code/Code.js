import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Code.css'

class Code extends Component  {
	state = {
		copied: false,
	}
	toggleCopiedState = () => {
		this.setState({ copied: true })
		setTimeout(() => {
			this.setState({ copied: false})
		}, 1000)
	}

	render() {
		return (
			<div className="code__block">
				<div className={"copy__success " + (this.state.copied ? 'active' : '')}>
					<span>Code Copied!</span>
				</div>
				<pre>{this.props.code}</pre>
				<CopyToClipboard text={this.props.codeForCopy} onCopy={this.toggleCopiedState}>
					<button type="button" className="copy__button is-dark">Copy!</button>
				</CopyToClipboard>
			</div>
		)
	}

}

export default Code