import React from 'react';
import * as Util from '../../../../globals/Util'
import './FiltersControls.css';

const filtersControls = (props) => {

	return (
		<div className='box-shadow__controls'>
			<button className="reset-box box-shadow__reset"
					onClick={props.resetFiltersStateHandler}>Reset
			</button>
		</div>
	)

}


export default filtersControls