import React from 'react';
import './TransformControls.css';
import SelectBox from '../../../SelectBox/SelectBox'

const transformControls = (props) => {

	return (
		<div className='box-shadow__controls'>

			<div className="box-checkbox">
				<label>
					Spin?
					<input type="checkbox" onChange={props.onSpinToggle} checked={props.isSpinning} />
				</label>
			</div>

			<div className="color-with-label font-size-box" style={{float: 'none', display: 'inline-block'}}><span className="color-with-label__label">Backface-visibility:</span>

				<div className="font-size-input">
					<SelectBox
							   options={['visible', 'hidden']}
							   onSelectChange={(event) => props.onBackfaceVisibilityChange(event.target.value)}
							   value={props.backfaceVisibility}/>
				</div>
			</div>

			<button className="reset-box box-shadow__reset"
					onClick={props.resetTransformStateHandler}>Reset
			</button>
		</div>
	)

}


export default transformControls