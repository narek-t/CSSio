import React from 'react'
import {connect} from 'react-redux'
import {StickyContainer, Sticky} from 'react-sticky';

import './index.css'
import * as thunkAnimatedGradient from './thunk/thunkGradient'
import Preview from '../Preview/Preview'
import * as Util from '../../globals/Util'
import Code from '../Code/Code'



import GradientSingle from './components/GradientSingle/GradientSingle'
import GradientPreview from './components/GradientPreview/GradientPreview'
import GradientControls from './components/GradientControls/GradientControls'
import GradientLine from './components/GradientLine/GradientLine'


const animatedGradient = (props) => {
	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Gradient animator</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">
						<StickyContainer>
							<div className="page__content">
								<GradientLine
									gradients={props.sortedGradients}
									angle={props.angle}
									handleChange={
										(value, id, from) => props.handleChange(value, id, from)
									}
									setNewStopItemHandler={(event) => props.setNewStopItemHandler(event, props.gradients, Util.uniqID())}
								/>
								<div className="box-shadow__wrapper cf">
									<div className="box-shadow__aside gradient__aside">
										{
											props.sortedGradients.map((gradient, i) => {
												return <GradientSingle
													gradients={props.gradients}
													color={gradient.color}
													key={gradient.id}
													index={i}
													handleChange={(value, from) => props.handleChange(value, gradient.id, from)}
													handleDelete={() => props.deleteGradientHandler(gradient.id)}
													step={gradient.positionPercentage}/>
											})
										}
									</div>
									<div className="preview__area-wrapper gradient__area-wrapper">
										<Sticky topOffset={50}
												disableHardwareAcceleration={true}
												bottomOffset={50}>
											{
												({style, isSticky}) =>
													<Preview
														style={style}
														isSticky={isSticky}
														controls={
															<GradientControls
																resetGradientState={props.resetGradientState}
																type={props.type}
																angle={props.angle}
																angleChangeHandler={(value) => props.angleChangeHandler(value)}
																changeTypeHandler={(value) => props.handleTypeChange(value)}
																animationSettings={props.animationSettings}
																refresh={props.refresh}

																onAnimationSettingsChange={(value, name) => props.onAnimationSettingsChange(value, name)}/>
														}>
														<GradientPreview
															gradients={props.gradients}
															angle={props.angle}
															animationSettings={props.animationSettings}
															type={props.type}/>
													</Preview>
											}
										</Sticky>
									</div>
								</div>
							</div>
						</StickyContainer>
						<div className="box-shadow__code">
							<Code
								code={Util.transformGradientAnimatorStyles(props.gradients, props.angle, props.type, 'forCode', props.animationSettings)}
								/>

						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		gradients: state.reducerAnimatedGradient.gradients,
		sortedGradients: Util.sortArray(state.reducerAnimatedGradient.gradients, 'positionPercentage'),
		angle: state.reducerAnimatedGradient.angle,
		type: state.reducerAnimatedGradient.type,
		animationSettings: state.reducerAnimatedGradient.animationSettings,
		refreshHash: state.reducerAnimatedGradient.refresh,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChange: (value,id, from) => {
			dispatch(thunkAnimatedGradient.handleChange(value,id, from))
		},
		deleteGradientHandler: (id) => {
			dispatch(thunkAnimatedGradient.handleDelete(id))
		},
		resetGradientState: () => {
			dispatch(thunkAnimatedGradient.resetGradientState())
		},
		setNewStopItemHandler: (event, gradients, id) => {
			dispatch(thunkAnimatedGradient.setNewStopItem(event, gradients, id))
		},
		handleTypeChange: (value) => {
			dispatch(thunkAnimatedGradient.changeType(value))
		},
		angleChangeHandler: (value) => {
			dispatch(thunkAnimatedGradient.changeAngle(value))
		},
		onAnimationSettingsChange: (value, name) => {
			dispatch(thunkAnimatedGradient.animationSettingsChange(value, name))
		},
		refresh: () => {
			dispatch(thunkAnimatedGradient.refresh())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(animatedGradient)