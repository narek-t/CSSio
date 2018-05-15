import React from 'react';
import {connect} from 'react-redux'
import * as Util from '../../../../globals/Util'

import './TransformPreview.css'

const transformPreview  = (props) => {

	return (
		<div className="filters__preview transforms-preview">
			<div style={{
				perspective: props.transforms[11].value,
				perspectiveOrigin: `${props.transforms[12].value}% ${props.transforms[13].value}%`,
			}}>
				<div className={(props.state.isSpinning ? 'is-spinning' : '') + (props.state.backfaceVisibility === 'hidden' ? ' backface-hidden' : '')} style={{

				}}>
					<div className="cube cube--hero" style={{
						transform: Util.transformTransformStyles(props.state),
					}}>
						<div className="cube__face cube__face--front">front</div>
						<div className="cube__face cube__face--right">right</div>
						<div className="cube__face cube__face--back">back</div>
						<div className="cube__face cube__face--left">left</div>
						<div className="cube__face cube__face--top">top</div>
						<div className="cube__face cube__face--bottom">bottom</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		state: state.reducerTransform,
		transforms: state.reducerTransform.transforms
	}
}


export default connect(mapStateToProps)(transformPreview)