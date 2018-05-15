import React from 'react';
import InputRange from 'react-input-range'
import './TransformGenerator.css'
import * as Util from '../../../../globals/Util'

const transformGenerator = (props) => {

	return (
		<div className="box-shadow__item">

			{
				props.transforms.map((item, index) => {
					return (
						<div className="range__item-slider" key={index}>
							<InputRange
								minValue={item.minValue}
								maxValue={item.maxValue}
								step={item.step}
								formatLabel={(value) => {
									return (value + item.unit)
								}}
								onChange={(value) => {
									if (item.step === 0.1) {
										return props.onRangeChange(+(value.toFixed(1)), index, item.name)
									}
									return props.onRangeChange(value, index, item.name)
								}}
								value={item.value}/>
							<div
								className={'range__item-input filter__item-input ' + (item.unit === 'deg' ? 'deg' : ' ') + (item.unit === 'px' ? 'px' : '') + (item.unit === '' ? 'empty' : '')}>
								<input className='range__item-label-input input'
									   type={'tel'}
									   value={item.value}
									   onChange={(event) => {
										   return props.onRangeChange(Util.checkNumberInput(event, item.maxValue, item.minValue, item.value), index)
									   }}/>
								<span>{item.unit}</span>
							</div>
							<div className="range__item-label">
								<span>{item.name}: </span>
							</div>
						</div>
					)
				})
			}

		</div>
	)

}


export default transformGenerator