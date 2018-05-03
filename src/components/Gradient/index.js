import React from 'react'
import {connect} from 'react-redux'
import {StickyContainer, Sticky} from 'react-sticky';

import './index.css'
import * as thunkGradient from './thunk/thunkGradient'
import Preview from '../Preview/Preview'
import * as Util from '../../globals/Util'
import Code from '../Code/Code'



import GradientSingle from './components/GradientSingle/GradientSingle'
import GradientPreview from './components/GradientPreview/GradientPreview'
import GradientControls from './components/GradientControls/GradientControls'
import GradientLine from './components/GradientLine/GradientLine'


const gradient = (props) => {
	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Gradient generator</h1>
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
																changeTypeHandler={(value) => props.handleTypeChange(value)}/>
														}>
														<GradientPreview
															gradients={props.gradients}
															angle={props.angle}
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
								code={Util.transformGradientStyles(props.gradients, props.angle, props.type, 'forCode')}
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
		gradients: state.reducerGradient.gradients,
		sortedGradients: Util.sortArray(state.reducerGradient.gradients, 'positionPercentage'),
		angle: state.reducerGradient.angle,
		type: state.reducerGradient.type,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChange: (value,id, from) => {
			dispatch(thunkGradient.handleChange(value,id, from))
		},
		deleteGradientHandler: (id) => {
			dispatch(thunkGradient.handleDelete(id))
		},
		resetGradientState: () => {
			dispatch(thunkGradient.resetGradientState())
		},
		setNewStopItemHandler: (event, gradients, id) => {
			dispatch(thunkGradient.setNewStopItem(event, gradients, id))
		},
		handleTypeChange: (value) => {
			dispatch(thunkGradient.changeType(value))
		},
		angleChangeHandler: (value) => {
			dispatch(thunkGradient.changeAngle(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(gradient)