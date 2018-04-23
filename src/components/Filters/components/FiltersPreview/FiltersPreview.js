import React, {Component} from 'react';
import {connect} from 'react-redux'
import './FiltersPreview.css'
import image from '../../../../assets/images/some.jpg'

class FiltersPreview extends Component {

	transformStyles = (styleArray) => {
		if (Array.isArray(styleArray) && styleArray.length)
			return styleArray.join('')
	}

	render() {
		return (

			<div className='filters__preview'>
				<img src={image} style={{
					filter: this.transformStyles(this.props.style)
				}}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {

	}
}

export default connect(mapStateToProps)(FiltersPreview)