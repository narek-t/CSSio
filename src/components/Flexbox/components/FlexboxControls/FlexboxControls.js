import React from 'react'
import './FlexboxControls.css'
import * as Util from '../../../../globals/Util'

const flexboxControls = (props) => {
	return (
		<div className='box-shadow__controls flexbox__controls'>

			<button onClick={props.onAddItem}
					className='button is-primary add-button'>Add more
			</button>

			<div className="color-with-label font-size-box"><span className="color-with-label__label">Items margin:</span>
				<div className="font-size-input">
					<input className='range__item-label-input input'
						   type={'tel'}
						   value={props.margin}
						   onChange={(event) => {
							   return props.onItemsMarginChange(Util.checkNumberInput(event, 100, 0, props.margin))
						   }}/>
					<span>px</span>
				</div>
			</div>

			<div className="box-checkbox">
				<label>
					Prefixes?
					<input type="checkbox" onChange={props.onPrefixesToggle} checked={props.prefixes} />
				</label>
			</div>


			<button className="reset-box box-shadow__reset"
					onClick={props.onResetState}>Reset
			</button>
		</div>
	)
}

export default flexboxControls