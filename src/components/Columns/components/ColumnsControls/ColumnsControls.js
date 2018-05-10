import React, {Component} from 'react'
import InputRange from 'react-input-range'
import * as Util from '../../../../globals/Util'
import ReactTooltip from 'react-tooltip'
import SelectBox from '../../../SelectBox/SelectBox'
import { ChromePicker } from 'react-color';
import './ColumnsControls.css'

class ColumnsControls extends Component {
	state = {
		displayBackgroundColorPicker: false,
		displayBoxColorPicker: false,
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
				<div className="range__item-slider range__item-slider-columns">
					<InputRange
						maxValue={10}
						minValue={1}
						onChange={(value) => this.props.changeColumn(value, 'columnCount')}
						value={this.props.count}/>
					<div className="range__item-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.count}
							   onChange={(event) => {
								   return this.props.changeColumn(Util.checkNumberInput(event, 10, 1, this.props.count), 'columnCount')
							   }}/>
					</div>
					<div className="range__item-label">
						<span>Column count: </span>
					</div>
				</div>

				<div className="color-with-label font-size-box column-gap-box" style={{marginLeft: '30px', marginRight: 0}} data-tip="try 100px or 20% or normal"><span className="color-with-label__label">Column gap:</span>

					<div className="font-size-input">
						<input className='range__item-label-input input columns-gap-input'
							   type={'text'}
							   value={this.props.gap}
							   onChange={(event) => this.props.changeColumn(event.target.value, 'columnGap')}/>
					</div>
				</div>

				<div className="color-with-label font-size-box column-gap-box" style={{marginLeft: '30px', marginRight: 0}} data-tip="The column-rule-width property specifies the width of the rule between columns."><span className="color-with-label__label">Rule width:</span>

					<div className="font-size-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={this.props.ruleWidth}
							   onChange={(event) => {
								   return this.props.changeColumn(Util.checkNumberInput(event, 50, 0, this.props.ruleWidth), 'columnRuleWidth')
							   }}/>
						<span>px</span>
					</div>
				</div>

				<div className="color-with-label font-size-box column-gap-box" style={{marginLeft: '30px'}}><span className="color-with-label__label">Rule style:</span>

					<div className="font-size-input">
						<SelectBox dataTip="The column-rule-style property specifies the style of the rule between columns."
								   options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']}
								   onSelectChange={(event) => this.props.changeColumn(event.target.value, 'columnRuleStyle')}
								   value={this.props.ruleStyle}/>
					</div>
				</div>

				<div className="color-with-label column-style-box"><span className="color-with-label__label">Rule  color:</span>
					<div className="color-with-label__color--wrapper">
						<div className="color-with-label__color"
							 onClick={() => this.handleClick('displayBackgroundColorPicker') }
							 style={{
								 backgroundColor: this.props.ruleColor
							 }}>
						</div>
					</div>
					{ this.state.displayBackgroundColorPicker ? <div className="popover">
						<div className="cover" onClick={ () => this.handleClose('displayBackgroundColorPicker') }/>
						<ChromePicker color={ this.props.ruleColor }
									  onChange={(value) => this.props.changeColumn(Util.transformColorType(value), 'columnRuleColor')} />

					</div> : null }
				</div>


				<button className="reset-box box-shadow__reset"
						onClick={this.props.resetColumnsHandler}>Reset
				</button>
				<ReactTooltip place="top" type="info" effect="solid" className={'tooltip'}/>
			</div>
		)
	}

}

export default ColumnsControls