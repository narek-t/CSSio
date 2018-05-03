import React, {Component} from 'react';
import InputRange from 'react-input-range'
import {connect} from 'react-redux'
import './TextShadowSingle.css'
import * as Util from '../../../../globals/Util'
import { ChromePicker } from 'react-color';

class TextShadowSingle extends Component {
	state = {
		displayColorPicker: false,
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker })
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false })
	};

	render() {
		return (
			<div className="box-shadow__item">
				{
					Array.isArray(this.props.shadowItems) && this.props.shadowItems.length > 1 ?
						<button className="delete-shadow" onClick={this.props.deleteShadowHandler}><span>x</span></button> : null
				}

				<div className="range__item-slider">
					<InputRange
						maxValue={this.props.maxValue}
						formatLabel={(value) => {return value + 'px'}}
						minValue={this.props.minValue}
						onChange={(value) => this.props.onRangeChange(value, 'horizontal')}
						value={this.props.value.horizontal}/>
					<div className="range__item-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.value.horizontal}
							   onChange={(event) => {
								   return this.props.onRangeChange(Util.checkNumberInput(event, this.props.maxValue, this.props.minValue, this.props.value.horizontal), 'horizontal')
							   }}/>
						<span>px</span>
					</div>
					<div className="range__item-label">
						<span>Horizontal Length: </span>
					</div>
				</div>

				<div className="range__item-slider">
					<InputRange
						maxValue={this.props.maxValue}
						formatLabel={(value) => {return value + 'px'}}
						minValue={this.props.minValue}
						onChange={(value) => this.props.onRangeChange(value, 'vertical')}
						value={this.props.value.vertical}/>
					<div className="range__item-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.value.vertical}
							   onChange={(event) => {
								   return this.props.onRangeChange(Util.checkNumberInput(event, this.props.maxValue, this.props.minValue, this.props.value.vertical), 'vertical')
							   }}/>
						<span>px</span>
					</div>
					<div className="range__item-label">
						<span>Vertical Length: </span>
					</div>
				</div>

				<div className="range__item-slider">
					<InputRange
						maxValue={50}
						formatLabel={(value) => {return value + 'px'}}
						minValue={0}
						onChange={(value) => this.props.onRangeChange(value, 'blur')}
						value={this.props.value.blur}/>
					<div className="range__item-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.value.blur}
							   onChange={(event) => {
								   return this.props.onRangeChange(Util.checkNumberInput(event, this.props.maxValue, this.props.minValue, this.props.value.blur), 'blur')
							   }}/>
						<span>px</span>
					</div>
					<div className="range__item-label">
						<span>Blur Radius: </span>
					</div>
				</div>
				<div className="color-control cf">
					<div className="color-with-label"><span className="color-with-label__label">Shadow color:</span>
						<div className="color-with-label__color--wrapper"><div className="color-with-label__color"
							 onClick={ this.handleClick }
							 style={{
								 backgroundColor: this.props.currentColor
							 }}
						>
						</div></div>

						{ this.state.displayColorPicker ? <div className="popover">
							<div className="cover" onClick={ this.handleClose }/>
							<ChromePicker color={ this.props.currentColor }
										  onChange={(value) => this.props.onRangeChange(value, 'shadowColor')} />
						</div> : null }
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		shadowItems: state.reducerTextShadow.shadowItems
	}
}

export default connect(mapStateToProps)(TextShadowSingle)