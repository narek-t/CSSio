import React from 'react'
import * as Util from '../../../../globals/Util'
import './TextGradientPreview.css'

const textGradientPreview = (props) => {
	return (
		<div className='text-shadow__preview text-gradient__preview'>
			<div
				className="text-shadow__box"
				contentEditable={true}
				suppressContentEditableWarning
				style={
					{
						backgroundImage: Util.transformGradientStyles(props.gradients, props.angle, props.type),
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontSize: props.fontSize,
					}
				}
			>
				The sky was cloudless and of a deep dark blue.
			</div>
			<span className="text-shadow-note">
					<span>You can edit the text above by clicking on it</span>
				</span>
		</div>
	)

}

export default textGradientPreview