import React from 'react';
import {connect} from 'react-redux'
import './index.css'
import * as thunkTextShadow from './thunk/thunkTextShadow'
import * as Util from '../../globals/Util'
import TextShadowSingle from './components/TextShadowSingle/TextShadowSingle'
import Preview from '../Preview/Preview'
import TextShadowPreview from './components/TextShadowPreview/TextShadowPreview'
import TextShadowControls from './components/TextShadowControls/TextShadowControls'
import Code from '../Code/Code'

import {StickyContainer, Sticky} from 'react-sticky';

const textShadow = (props) => {

	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Text Shadow</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">
						<StickyContainer>
							<div className="page__content">
								<div className="box-shadow__wrapper cf">
									<div className="box-shadow__aside">
										{
											props.shadowItems && props.shadowItems.length ?
												props.shadowItems.map((shadowItem, index) => {
													return (
														<TextShadowSingle
															maxValue={100}
															minValue={-100}
															value={shadowItem}
															key={index}
															currentColor={props.shadowItems[index].shadowColor}
															deleteShadowHandler={() => props.deleteShadowHandler(index)}
															onRangeChange={(value, type) => props.onShadowChangeHandler(value, type, index)}/>
													)
												}) : null
										}
										<button onClick={props.addShadowHandler}
												className='button is-primary add-button'>Add more
										</button>
									</div>

									<div className="preview__area-wrapper">
										<Sticky topOffset={-50}
												disableHardwareAcceleration={true}
												bottomOffset={50}>
											{
												({style, isSticky}) =>
													<Preview style={style}
															 controls={
																 <TextShadowControls
																	 changeColorHandler={(value, type) => props.changeColorHandler(value, type)}
																	 onFontSizeChange={(value) => props.fontSizeChangeHandler(value)}
																	 resetTextShadowStateHandler={props.resetTextShadowStateHandler}/>
															 }
															 isSticky={isSticky}>
														<TextShadowPreview style={props.stylesArray} />
													</Preview>
											}
										</Sticky>
									</div>
								</div>
							</div>
						</StickyContainer>
						<div className="box-shadow__code">
							<Code code={Util.transformTextShadowStyles(props.stylesArray, 'forView')} codeForCopy={Util.transformTextShadowStyles(props.stylesArray, 'forCopy')}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		shadowItems: state.reducerTextShadow.shadowItems,
		stylesArray: state.reducerTextShadow.stylesArray
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addShadowHandler: () => {
			dispatch(thunkTextShadow.addShadow())
		},
		onShadowChangeHandler: (value, type, index) => {
			dispatch(thunkTextShadow.changeShadow(value, type, index))
		},
		deleteShadowHandler: (index) => {
			dispatch(thunkTextShadow.deleteShadow(index))
		},
		changeColorHandler: (value, type) => {
			dispatch(thunkTextShadow.changeColor(value, type))
		},
		resetTextShadowStateHandler: () => {
			dispatch(thunkTextShadow.resetTextShadowState())
		},

		fontSizeChangeHandler: (value) => {
			dispatch(thunkTextShadow.fontSizeChange(value))
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(textShadow)