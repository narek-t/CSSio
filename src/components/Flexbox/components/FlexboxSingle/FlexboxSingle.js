import React from 'react'
import * as Util from '../../../../globals/Util'
import * as thunkFlexbox from '../../thunk/thunkFlexbox'
import {connect} from 'react-redux'
import SelectBox from '../../../SelectBox/SelectBox'
import './FlexboxSingle.css'

const flexboxSingle = (props) => {
	return (
		<div className="flex-item">
			<div className="flex-item__inner">

				{
					props.length > 1 ?
						<button className="delete-shadow" onClick={() => props.deleteItemHandler(props.index)}>
							<span>x</span>
						</button> : null
				}
				<div className="flex-item__controls">
					<span className="flex-item-number">{props.index+1})</span>

					<div className="flex-item__controls-item">
						<div className="step-wrapper flex-item-inline">
							<div className="range__item-input">
								<span className="color-with-label__label">Order: </span>
								<input className='range__item-label-input input gradient-input'
									   type={'tel'}
									   value={props.item.order}
									   onChange={(event) => props.handleSingleControlsChange(Util.checkNumberInput(event, 100, 0, props.item.order), props.index, 'order')}
								/>
							</div>
						</div>

						<div className="flex-item-inline">
							<span className="flex-item-label">align-self: </span>
							<SelectBox
								options={['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
								onSelectChange={(event) => props.handleSingleControlsChange(event.target.value, props.index,  'alignSelf')}
								value={props.item.alignSelf}/>
						</div>


					</div>


					<div className="flex-item__controls-item" style={{marginBottom: 0}}>
						<div className="step-wrapper flex-item-inline">
							<div className="range__item-input">
								<span className="color-with-label__label">Flex: </span>
								<input className='range__item-label-input input gradient-input'
									   type={'tel'}
									   value={props.item.flexGrow}
									   onChange={(event) =>  props.handleSingleControlsChange(Util.checkNumberInput(event, 100, 0, props.item.flexGrow), props.index, 'flexGrow')
									   }
								/>
								<input className='range__item-label-input input gradient-input'
									   type={'tel'}
									   value={props.item.flexShrink}
									   onChange={(event) =>  props.handleSingleControlsChange(Util.checkNumberInput(event, 100, 0, props.item.flexShrink), props.index, 'flexShrink')
									   }
								/>
								<input className='range__item-label-input input gradient-input input__text'
									   type={'text'}
									   value={props.item.flexBasis}
									   onChange={(event) => props.handleSingleControlsChange(event.target.value, props.index,  'flexBasis')}
								/>
							</div>
						</div>
					</div>



				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		flexItems: state.reducerFlexbox.flexItems,
		margin: state.reducerFlexbox.itemsMargin,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteItemHandler: (index) => {
			dispatch(thunkFlexbox.deleteItem(index))
		},
		handleSingleControlsChange: (value, index, type) => {
			dispatch(thunkFlexbox.singleControlsChange(value, index, type))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(flexboxSingle)