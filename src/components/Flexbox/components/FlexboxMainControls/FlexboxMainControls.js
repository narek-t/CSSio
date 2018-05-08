import React from 'react'
import {connect} from 'react-redux'
import * as thunkFlexbox from '../../thunk/thunkFlexbox'
import './FlexboxMainControls.css'
import SelectBox from '../../../SelectBox/SelectBox'

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
				options={['row', 'row-reverse', 'column', 'column-reverse']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'flexDirection')}
				value={props.state.flexDirection}/>
			<SelectBox
				title="flex-wrap:"
				options={['nowrap', 'wrap', 'wrap-reverse']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'flexWrap')}
				value={props.state.flexWrap}/>
			<SelectBox
				title="justify-content:"
				options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'justifyContent')}
				value={props.state.justifyContent}/>
			<SelectBox
				title="align-items:"
				options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'alignItems')}
				value={props.state.alignItems}/>
			<SelectBox
				title="align-content:"
				options={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
				onSelectChange={(event) => props.handleSelectChange(event.target.value, 'alignContent')}
				value={props.state.alignContent}/>
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