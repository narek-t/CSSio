import React, {Component} from 'react';
import {connect} from 'react-redux'
import { ChromePicker } from 'react-color';
import * as thunkBoxShadow from '../../thunk/thunkBoxShadow'
import './BoxShadowControls.css';

class BoxShadowControls extends Component {
	state = {
		displayBackgroundColorPicker: false,
		displayBoxColorPicker: false,
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.backgroundColor !== this.props.backgroundColor ||
			nextProps.boxColor !== this.props.boxColor ||
			nextState.displayBackgroundColorPicker !== this.state.displayBackgroundColorPicker ||
			nextState.displayBoxColorPicker !== this.state.displayBoxColorPicker ||
			nextProps.prefixes !== this.props.prefixes
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
				<div className="color-with-label"><span className="color-with-label__label">Box color:</span>
					<div className="color-with-label__color"
						 onClick={() => this.handleClick('displayBoxColorPicker') }
						 style={{
							 backgroundColor: this.props.boxColor
						 }}
					>
					</div>
					{ this.state.displayBoxColorPicker ? <div className="popover">
						<div className="cover" onClick={ () => this.handleClose('displayBoxColorPicker') }/>
						<ChromePicker color={ this.props.boxColor }
									  onChange={(value) => this.props.changeColorHandler(value, 'boxColor')} />
					</div> : null }
				</div>
				<div className="box-checkbox">
					<label>
						Prefixes?
						<input type="checkbox" onChange={this.props.togglePrefixes} checked={this.props.prefixes} />
					</label>
				</div>
				<button className="reset-box box-shadow__reset"
						onClick={this.props.resetBoxShadowStateHandler}>Reset
				</button>
			</div>
		)
	}

}


const mapStateToProps = state => {
	return {
		boxColor: state.reducerBoxShadow.boxColor,
		backgroundColor: state.reducerBoxShadow.backgroundColor,
		prefixes: state.reducerBoxShadow.prefixes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		togglePrefixes: (event) => {
			dispatch(thunkBoxShadow.togglePrefixes(event.target.checked))
		}
	}
}




export default connect(mapStateToProps, mapDispatchToProps)(BoxShadowControls)