import React from 'react'
import {connect} from 'react-redux'
import * as thunkFlexbox from '../../thunk/thunkFlexbox'
import './FlexboxMainControls.css'
import SelectBox from '../../../SelectBox/SelectBox'
import ReactTooltip from 'react-tooltip'

const flexboxMainControls = (props) => {
	return (
		<div className="selectbox-wrapper">
			<SelectBox
				title="display:"
				options={['flex', 'inline-flex']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'display')}
				value={props.state.display}/>
			<SelectBox
				title="flex-direction:"
				dataTip="The flex-direction  property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed)."
				options={['row', 'row-reverse', 'column', 'column-reverse']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'flexDirection')}
				value={props.state.flexDirection}/>
			<SelectBox
				title="flex-wrap:"
				dataTip="The flex-wrap property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked."
				options={['nowrap', 'wrap', 'wrap-reverse']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'flexWrap')}
				value={props.state.flexWrap}/>
			<SelectBox
				title="justify-content:"
				dataTip="The justify-content property defines how the browser distributes space between and around content items along the main axis of their container."
				options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'justifyContent')}
				value={props.state.justifyContent}/>
			<SelectBox
				title="align-items:"
				dataTip="The align-items property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like justify-content but in the perpendicular direction."
				options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'alignItems')}
				value={props.state.alignItems}/>
			<SelectBox
				title="align-content:"
				dataTip="The align-content property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container."
				options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'alignContent')}
				value={props.state.alignContent}/>
			<ReactTooltip place="top" type="info" effect="solid" className={'tooltip'}/>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		state: state.reducerFlexbox
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSelectChange: (value, key) => {
			dispatch(thunkFlexbox.mainControlsChange(value, key))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(flexboxMainControls)