import React from 'react'
import {connect} from 'react-redux'
import './index.css'

import * as thunkTransform from './thunk/thunkTransform'
import * as Util from '../../globals/Util'

import TransformGenerator from './components/TransformGenerator/TransformGenerator'
import TransformPreview from './components/TransformPreview/TransformPreview'
import TransformControls from './components/TransformControls/TransformControls'

import Preview from '../Preview/Preview'
import Code from '../Code/Code'

const transform = (props) => {
	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">CSS 3D Transform generator</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">
						<div className="page__content">
							<div className="box-shadow__wrapper cf">
								<div className="box-shadow__aside gradient__aside">
									<TransformGenerator
										transforms={props.transforms}
										onRangeChange={(value, index) => props.rangeChangeHandler(value, index)}/>
								</div>
								<div className="preview__area-wrapper gradient__area-wrapper">
									<Preview
										controls={
											<TransformControls
												resetTransformStateHandler={props.resetTransformHandler}
												isSpinning={props.state.isSpinning}
												backfaceVisibility={props.state.backfaceVisibility}
												onSpinToggle={(event) => props.onSpinToggle(event.target.checked)}
												onBackfaceVisibilityChange={(value) => props.onBackfaceVisibilityChange(value)}/>
										}>
										<TransformPreview style={props.stylesArray}/>
									</Preview>
								</div>
							</div>
						</div>
						<div className="box-shadow__code">
							<Code code={Util.generateTransformStyles(props.state)}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		transforms: state.reducerTransform.transforms,
		state: state.reducerTransform,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		rangeChangeHandler: (value, index) => {
			dispatch(thunkTransform.changeRange(value, index, 'value'))
		},
		resetTransformHandler: () => {
			dispatch(thunkTransform.resetState())
		},
		onSpinToggle: (value) => {
			dispatch(thunkTransform.spinToggle(value))
		},
		onBackfaceVisibilityChange: (value) => {
			dispatch(thunkTransform.backfaceVisibilityChange(value))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(transform)