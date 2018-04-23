import React from 'react';
import InputRange from 'react-input-range'
import './FiltersGenerator.css'
import * as Util from '../../../../globals/Util'

const filtersGenerator = (props) => {

	return (
		<div className="box-shadow__item">

			{
				props.filters.map((item, index) => {
					return (
						<div className="range__item-slider" key={index}>
							<InputRange
								minValue={item.minValue}
								maxValue={item.maxValue}
								step={item.step}
								formatLabel={(value) => {return value + item.units}}
								onChange={(value) => {props.onRangeChange(value, index)}}
								value={item.value}/>
							<div className={'range__item-input filter__item-input ' + (item.units === 'deg' ? 'deg' : ' ') + (item.units === 'px' ? 'px' : '')}>
								<input className='range__item-label-input input'
									   type={'tel'}
									   value={item.value}
									   onChange={(event) => {
										   return props.onRangeChange(Util.checkNumberInput(event, item.maxValue, item.minValue, item.value), index)
									   }}/>
								<span>{item.units}</span>
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


export default filtersGenerator