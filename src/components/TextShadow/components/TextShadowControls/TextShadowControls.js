import React, {Component} from 'react';
import {connect} from 'react-redux'
import { ChromePicker } from 'react-color';
import * as Util from '../../../../globals/Util'
import './TextShadowControls.css';

class TextShadowControls extends Component {
	state = {
		displayBackgroundColorPicker: false,
		displayTextColorPicker: false,
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.backgroundColor !== this.props.backgroundColor ||
			nextProps.textColor !== this.props.textColor ||
			nextProps.fontSize !== this.props.fontSize ||
			nextState.displayBackgroundColorPicker !== this.state.displayBackgroundColorPicker ||
			nextState.displayTextColorPicker !== this.state.displayTextColorPicker
	}

	handleClick = (type) => {
		this.setState({
			[type]: !this.state[type]
		})
	};

	handleClose = (type) => {
		this.setState({ [type]: false })
	};

	render() {
		return (
			<div className='box-shadow__controls'>
				<div className="color-with-label"><span className="color-with-label__label">Background color:</span>
					<div className="color-with-label__color"
						 onClick={() => this.handleClick('displayBackgroundColorPicker') }
						 style={{
							 backgroundColor: this.props.backgroundColor
						 }}
					>
					</div>
					{ this.state.displayBackgroundColorPicker ? <div className="popover">
						<div className="cover" onClick={ () => this.handleClose('displayBackgroundColorPicker') }/>
						<ChromePicker color={ this.props.backgroundColor }
									  onChange={(value) => this.props.changeColorHandler(value, 'backgroundColor')} />
					</div> : null }
				</div>
				<div className="color-with-label"><span className="color-with-label__label">Text  color:</span>
					<div className="color-with-label__color"
						 onClick={() => this.handleClick('displayTextColorPicker') }
						 style={{
							 backgroundColor: this.props.textColor
						 }}
					>
					</div>
					{ this.state.displayTextColorPicker ? <div className="popover">
						<div className="cover" onClick={ () => this.handleClose('displayTextColorPicker') }/>
						<ChromePicker color={ this.props.textColor }
									  onChange={(value) => this.props.changeColorHandler(value, 'textColor')} />
					</div> : null }
				</div>


				<div className="color-with-label font-size-box"><span className="color-with-label__label">Font size:</span>

					<div className="font-size-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.fontSize}
							   onChange={(event) => {
								   return this.props.onFontSizeChange(Util.checkNumberInput(event, 150, 1, this.props.fontSize))
							   }}/>
						<span>px</span>
					</div>


				</div>



				<button className="reset-box box-shadow__reset"
						onClick={this.props.resetTextShadowStateHandler}>Reset
				</button>
			</div>
		)
	}

}


const mapStateToProps = state => {
	return {
		textColor: state.reducerTextShadow.textColor,
		backgroundColor: state.reducerTextShadow.backgroundColor,
		fontSize: state.reducerTextShadow.fontSize
	}
}



export default connect(mapStateToProps)(TextShadowControls)