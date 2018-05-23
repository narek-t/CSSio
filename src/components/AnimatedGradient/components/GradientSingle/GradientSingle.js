import React, {Component} from 'react';
import './GradientSingle.css'
import {ChromePicker} from 'react-color';
import * as Util from '../../../../globals/Util'

class GradientSingle extends Component {
	state = {
		displayColorPicker: false,
	}

	handleClick = () => {
		this.setState({displayColorPicker: !this.state.displayColorPicker})
	};

	handleClose = () => {
		this.setState({displayColorPicker: false})
	};

	render() {
		return (

			<div className="box-shadow__item gradient-item cf">
				{
					Array.isArray(this.props.gradients) && this.props.gradients.length > 2 ?
						<button className="delete-gradient delete-shadow" onClick={this.props.handleDelete}><span>x</span>
						</button> : null
				}
				<div className="gradient-single-index">
					{this.props.index+1 + ')'}
				</div>

				<div className="color-with-label gradient-color-with-label"><span className="color-with-label__label">Color:</span>
					<div className="color-with-label__color--wrapper">
						<div className="color-with-label__color"
							 onClick={ this.handleClick }
							 style={{
								 backgroundColor: this.props.color
							 }}
						>
						</div>
					</div>

					{ this.state.displayColorPicker ? <div className="popover">
						<div className="cover" onClick={ this.handleClose }/>
						<ChromePicker color={ this.props.color }
									  onChange={(value) => this.props.handleChange(value, 'fromColor')}/>
					</div> : null }
				</div>

				<div className="step-wrapper">
					<div className="range__item-input">
						<span className="color-with-label__label">Step: </span>
						<input className='range__item-label-input input gradient-input'
							   type={'tel'}
							   value={this.props.step}
							   onChange={(event) => {
								return this.props.handleChange(Util.checkNumberInput(event, 100, 0, this.props.stop), 'fromInput')
							   }}
							   />
						<span>%</span>
					</div>
				</div>
			</div>
		)
	}
}

export default GradientSingle