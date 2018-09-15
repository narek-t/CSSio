import React from 'react';
import './FiltersControls.css';
const filtersControls = (props) => {

	return (
		<div className='box-shadow__controls'>

			<label className="file__input-label button is-primary add-button">
				Upload your image
				<input className="file__input"
					   type="file"
						 onChange={(e)=>props.onImageChange(e)}
						 onClick={(e) => e.target.value = null} />
			</label>

			<button className="reset-box box-shadow__reset"
					onClick={props.resetFiltersStateHandler}>Reset
			</button>
		</div>
	)

}


export default filtersControls