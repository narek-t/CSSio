import React from 'react'
import './GradientLine.css'
import * as Util from '../../../../globals/Util'
import Draggable from 'react-draggable';

const gradientLine = (props) => {

	return (
		<div className="gradient-line__wrapper">

			<div className="gradient-line"
				 onClick={(event) => props.setNewStopItemHandler(event, props.gradients, Util.uniqID())}
				 style={{
					background: Util.transformGradientStyles(props.gradients, props.angle)
				}}>
				{
					props.gradients.map((gradient, i) => {
						return (
							<Draggable
								key={gradient.id}
								axis="x"
								bounds="parent"
								defaultPosition={{x: gradient.positionPx, y: 0}}
								position={{x: gradient.positionPx, y: 0}}
								onDrag={(event, ui) => {
									return props.handleChange(ui.x, gradient.id, 'fromDrag')
								}}>
								<span
									style={{color: '#fff'}}
									className={'gradient-stop'}
									onClick={(event) => event.stopPropagation()}
								><span className="gradient-line-index">{i+1}</span></span>
							</Draggable>
						)
					})
				}
			</div>
		</div>
	)
}

export default gradientLine

