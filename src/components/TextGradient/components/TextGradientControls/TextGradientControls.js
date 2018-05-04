import React from 'react'
import * as Util from '../../../../globals/Util'
import './TextGradientControls.css'

const gradientControls = (props) => {
	return (
		<div className='box-shadow__controls'>
			<div className="gradient-type">
				<input
					type="radio"
					id="linear"
					value="linear"
					name="gradientType"
					className="gradient-type-input"
					checked={props.type === 'linear'}
					onChange={(event) => props.changeTypeHandler(event.target.value)}/>
				<label htmlFor="linear" className="button gradient-label">Linear</label>
				<div className={'color-with-label font-size-box gradient-angle-box' + (props.type === 'radial' ? ' hidden' : '')}><span className="color-with-label__label">Angle:</span>
					<div className="font-size-input">
						<input className='range__item-label-input input'
							   type={'tel'}
							   value={props.angle}
							   onChange={(event) => {
								   return props.angleChangeHandler(Util.checkNumberInput(event, 360, 0, props.angle))
							   }}/>
						<span>deg</span>
					</div>
				</div>
				<input
					type="radio"
					id="radial"
					value="radial"
					name="gradientType"
					className="gradient-type-input"
					checked={props.type === 'radial'}
					onChange={(event) => props.changeTypeHandler(event.target.value)}/>
				<label htmlFor="radial" className="button gradient-label">Radial</label>
			</div>

			<div className="color-with-label font-size-box text-gradient-font-size-input"><span className="color-with-label__label">Font size:</span>

				<div className="font-size-input">
					<input className='range__item-label-input input'
						   type={'tel'}
						   value={props.fontSize}
						   onChange={(event) => {
							   return props.onFontSizeChange(Util.checkNumberInput(event, 150, 0, props.fontSize))
						   }}/>
					<span>px</span>
				</div>
			</div>


			<button className="reset-box box-shadow__reset"
					onClick={props.resetGradientState}>Reset
			</button>
		</div>
	)
}

export default gradientControls