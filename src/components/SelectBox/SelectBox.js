import React from 'react'
import * as Util from '../../globals/Util'
import './SelectBox.css'

const selectBox = (props) => {
	return (
		<div className="selectbox">
			{ props.title ? <div className="select-title">{props.title}</div> : null }
			<div className="selectbox-inner">
				<select onChange={props.onSelectChange} value={props.value}>
					{ props.options.map(option => <option value={option} key={Util.uniqID()}>{option}</option>) }
				</select>
			</div>
		</div>
	)
}

export default selectBox