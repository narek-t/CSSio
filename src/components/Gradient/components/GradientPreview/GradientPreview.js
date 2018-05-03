import React from 'react'
import * as Util from '../../../../globals/Util'
import './GradientPreview.css'

const gradientPreview = (props) => {
	return (
		<div className="gradient-preview" style={{
			background: Util.transformGradientStyles(props.gradients, props.angle, props.type)
		}}>

		</div>
	)
}

export default gradientPreview