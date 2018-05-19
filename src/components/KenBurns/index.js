import React from 'react'
import {connect} from 'react-redux'
import * as thunkKenBurns from './thunk/thunkKenBurns'
import * as Util from '../../globals/Util'
import KenBurnsControls from './components/KenBurnsControls/KenBurnsControls'
import KenBurnsPreview from './components/KenBurnsPreview/KenBurnsPreview'

import Preview from '../Preview/Preview'
import Code from '../Code/Code'

import './index.css'

const kenBurns = (props) => {
	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Ken Burns animation generator</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">
						<div className="page__content">
							<div className="box-shadow__wrapper cf">
								<div className="preview__area-wrapper columns__area-wrapper">
									<Preview
										controls={
											<KenBurnsControls
												onImageChange={(e) => props.handleImageChange(e)}
												resetKenBurnsHandler={props.resetKenBurnsState}
												animationSettings={props.animationSettings}
												refresh={props.refresh}

												onAnimationSettingsChange={(value, name) => props.onAnimationSettingsChange(value, name)}
											/>
										}>
										<KenBurnsPreview
											imageUrl={props.imageUrl}
											animationSettings={props.animationSettings}
											refresh={props.refreshHash}
										/>
									</Preview>
								</div>
							</div>
						</div>
						<div className="box-shadow__code">
							<Code
								code={
									Util.transformKenBurnsStylesForCode(props.animationSettings)
								}
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
		imageUrl: state.reducerKenBurns.imageUrl,
		refreshHash: state.reducerKenBurns.refresh,
		animationSettings: state.reducerKenBurns.animationSettings,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetKenBurnsState: () => {
			dispatch(thunkKenBurns.resetKenBurnState())
		},
		handleImageChange: (e) => {
			dispatch(thunkKenBurns.imageChange(e))
		},
		onAnimationSettingsChange: (value, name) => {
			dispatch(thunkKenBurns.animationSettingsChange(value, name))
		},
		refresh: () => {
			dispatch(thunkKenBurns.refresh())
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(kenBurns)