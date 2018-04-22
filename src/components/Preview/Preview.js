import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component  {

	render() {
		return (
			<div className={'preview__area ' + (this.props.isSticky ? 'sticky' : '')}
				 style={this.props.style}>
				{this.props.children}
				{
					this.props.controls ?
						<div className="preview__controls">
							{this.props.controls}
						</div> : null
				}
			</div>
		)
	}
}

export default Preview