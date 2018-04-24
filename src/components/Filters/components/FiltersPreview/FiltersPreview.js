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
		let imageUrl = this.props.imageUrl;
		let imagePreview = null;
		if (imageUrl) {
			imagePreview = (<img src={imageUrl} alt="" style={{
				filter: this.transformStyles(this.props.style),
				WebkitFilter: this.transformStyles(this.props.style)
			}} />);
		} else {
			imagePreview = (
				<img src={image} alt="" style={{
					filter: this.transformStyles(this.props.style),
					WebkitFilter: this.transformStyles(this.props.style)
				}}/>
			);
		}

		return (

			<div className="filters__preview">
					{imagePreview}
				<span className="text-shadow-note">
					<span>Your images will not be saved anywhere</span>
				</span>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		imageUrl: state.reducerFilter.imageUrl
	}
}

export default connect(mapStateToProps)(FiltersPreview)