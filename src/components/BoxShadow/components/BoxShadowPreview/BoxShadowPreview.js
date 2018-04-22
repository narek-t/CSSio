import React, {Component} from 'react';
import {connect} from 'react-redux'
import './BoxShadowPreview.css'

class BoxShadowPreview extends Component {

	transformStyles = (styleArray) => {
		return styleArray.join('')
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.style !== this.props.stylesArray ||
			nextProps.bgColor !== this.props.bgColor ||
			nextProps.boxColor !== this.props.boxColor
	}

	render() {
		return (
			<div className='box-shadow__preview' style={{backgroundColor: this.props.bgColor}}>
				<div className="box-shadow__box-outer box-shadow__box">
					<div className="box-shadow__box"
						 style={{
							 boxShadow: this.transformStyles(this.props.stylesArray),
							 backgroundColor: this.props.boxColor,
						 }}>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		stylesArray: state.reducerBoxShadow.stylesArray,
		bgColor: state.reducerBoxShadow.backgroundColor,
		boxColor: state.reducerBoxShadow.boxColor,
	}
}

export default connect(mapStateToProps)(BoxShadowPreview)