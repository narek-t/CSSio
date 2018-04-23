import React from 'react';
import {connect} from 'react-redux'
import './index.css'
import * as thunkBoxShadow from './thunk/thunkBoxShadow'
import * as Util from '../../globals/Util'
import BoxShadowSingle from './components/BoxShadowSingle/BoxShadowSingle'
import Preview from '../Preview/Preview'
import BoxShadowPreview from './components/BoxShadowPreview/BoxShadowPreview'
import BoxShadowControls from './components/BoxShadowControls/BoxShadowControls'
import Code from '../Code/Code'

import {StickyContainer, Sticky} from 'react-sticky';

const boxShadow = (props) => {

	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Box Shadow</h1>
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
														<BoxShadowSingle
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
																 <BoxShadowControls
																	 changeColorHandler={(value, type) => props.changeColorHandler(value, type)}
																	 resetBoxShadowStateHandler={props.resetBoxShadowStateHandler}/>
															 }
															 isSticky={isSticky}>
														<BoxShadowPreview style={props.stylesArray} />
													</Preview>
											}
										</Sticky>
									</div>
								</div>
							</div>
						</StickyContainer>
						<div className="box-shadow__code">
							<Code
								code={Util.transformBoxShadowStyles(props.stylesArray, props.prefixes, 'forView')}
								codeForCopy={Util.transformBoxShadowStyles(props.stylesArray, props.prefixes, 'forCopy')}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		shadowItems: state.reducerBoxShadow.shadowItems,
		stylesArray: state.reducerBoxShadow.stylesArray,
		prefixes: state.reducerBoxShadow.prefixes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addShadowHandler: () => {
			dispatch(thunkBoxShadow.addShadow())
		},
		onShadowChangeHandler: (value, type, index) => {
			dispatch(thunkBoxShadow.changeShadow(value, type, index))
		},
		resetBoxShadowStateHandler: () => {
			dispatch(thunkBoxShadow.resetBoxShadowState())
		},
		changeColorHandler: (value, type) => {
			dispatch(thunkBoxShadow.changeColor(value, type))
		},
		deleteShadowHandler: (index) => {
			dispatch(thunkBoxShadow.deleteShadow(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(boxShadow)