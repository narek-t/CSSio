import React from 'react'
import {connect} from 'react-redux'
import * as thunkFlexbox from './thunk/thunkFlexbox'
import './index.css'
import * as Util from '../../globals/Util'

import FlexboxMainControls from './components/FlexboxMainControls/FlexboxMainControls'
import FlexboxControls from './components/FlexboxControls/FlexboxControls'
import FlexboxSingle from './components/FlexboxSingle/FlexboxSingle'

import FlexboxPreview from './components/FlexboxPreview/FlexboxPreview'
import Preview from '../Preview/Preview'
import Code from '../Code/Code'

const flexbox = (props) => {
	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Flexbox generator</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">

							<div className="page__content">
								<FlexboxMainControls/>
								<div className="box-shadow__wrapper cf">
									<div className="box-shadow__aside gradient__aside flexbox__aside">
										{
											Array.isArray(props.flexItems) && props.flexItems.length ?
												props.flexItems.map((flexItem, index) => {
													return <FlexboxSingle key={index} index={index} item={flexItem} length={props.flexItems.length} />
												}) : null
										}
									</div>
									<div className="preview__area-wrapper gradient__area-wrapper">
										<Preview
											controls={
												<FlexboxControls
													margin={props.state.itemsMargin}
													prefixes={props.state.prefixes}
													onItemsMarginChange={(value) => props.itemsMarginChangeHandler(value)}
													onPrefixesToggle={(event) => props.togglePrefixesHandler(event.target.checked)}
													onResetState={props.resetStateHandler}
													onAddItem={props.addItemHandler}/>
											}>
											<FlexboxPreview flexItems={props.flexItems} />
										</Preview>
									</div>
								</div>
							</div>

						<div className="box-shadow__code">
							<Code code={Util.transformFlexboxStyles(props.state)}
								  codeForCopy={Util.transformFlexboxStyles(props.state).join('')}/>

						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		state: state.reducerFlexbox,
		flexItems: state.reducerFlexbox.flexItems
	}
}

const mapDispatchToProps = dispatch => {
	return {
		itemsMarginChangeHandler: (value) => {
			dispatch(thunkFlexbox.changeMargin(value))
		},
		togglePrefixesHandler: (value) => {
			dispatch(thunkFlexbox.togglePrefixes(value))
		},
		resetStateHandler: () => {
			dispatch(thunkFlexbox.resetState())
		},
		addItemHandler: () => {
			dispatch(thunkFlexbox.addItem())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(flexbox)