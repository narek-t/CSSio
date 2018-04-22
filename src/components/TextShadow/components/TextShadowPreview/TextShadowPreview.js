import React, {Component} from 'react';
import {connect} from 'react-redux'
import './TextShadowPreview.css'

class TextShadowPreview extends Component {

	transformStyles = (styleArray) => {
		return styleArray.join('')
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.style !== this.props.stylesArray ||
			nextProps.bgColor !== this.props.bgColor ||
			nextProps.textColor !== this.props.textColor
	}

	render() {
		return (
			<div className='text-shadow__preview' style={{backgroundColor: this.props.bgColor}}>
				<div className="text-shadow__box" contentEditable={true} suppressContentEditableWarning style={{
					textShadow: this.transformStyles(this.props.stylesArray),
					color: this.props.textColor,
					fontSize: this.props.fontSize
				}}>
					The sky was cloudless and of a deep dark blue.
				</div>
				<span className="text-shadow-note">
					<span>You can edit the text above by clicking on it</span>
				</span>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		stylesArray: state.reducerTextShadow.stylesArray,
		bgColor: state.reducerTextShadow.backgroundColor,
		textColor: state.reducerTextShadow.textColor,
		fontSize: state.reducerTextShadow.fontSize
	}
}

export default connect(mapStateToProps)(TextShadowPreview)