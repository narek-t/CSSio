import React from 'react'
import * as Util from '../../../../globals/Util'
import './GradientPreview.css'

const gradientPreview = (props) => {
	return (
		<div className="gradient-preview" style={{
			backgroundImage: Util.transformGradientStyles(props.gradients, props.angle, props.type),
			backgroundSize: '400% 400%',
			animation: Util.transformKenBurnsStyles(props.animationSettings).animationStyles
		}}>

		</div>
	)
}

export default gradientPreview