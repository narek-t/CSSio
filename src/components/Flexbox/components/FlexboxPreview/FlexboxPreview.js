import React from 'react'
import {connect} from 'react-redux'
import './FlexboxPreview.css'
import FlexboxSinglePreview from '../FlexboxSinglePreview/FlexboxSinglePreview'

const flexboxPreview = (props) => {
	return (
		<div className="flexbox-preview">
			<div className="flex-wrapper" style={{
				display: props.display,
				flexDirection: props.flexDirection,
				flexWrap: props.flexWrap,
				justifyContent: props.justifyContent,
				alignItems: props.alignItems,
				alignContent: props.alignContent,
			}}>
				{
					Array.isArray(props.flexItems) && props.flexItems.length ?
						props.flexItems.map((flexItem, index) => {
							return <FlexboxSinglePreview key={flexItem.id} index={index} item={flexItem} margin={props.margin} />
						}) : null
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		display: state.reducerFlexbox.display,
		margin: state.reducerFlexbox.itemsMargin,
		flexDirection: state.reducerFlexbox.flexDirection,
		flexWrap: state.reducerFlexbox.flexWrap,
		justifyContent: state.reducerFlexbox.justifyContent,
		alignItems: state.reducerFlexbox.alignItems,
		alignContent: state.reducerFlexbox.alignContent,
	}
}

export default connect(mapStateToProps)(flexboxPreview)