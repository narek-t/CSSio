import * as actionsFlexbox from '../store/actions'

export const resetState = () => (dispatch) => {
	dispatch(actionsFlexbox.resetState())
}

export const addItem = () => (dispatch) => {
	dispatch(actionsFlexbox.addItem())
}

export const deleteItem = (index) => (dispatch) => {
	dispatch(actionsFlexbox.deleteItem(index))
}

export const changeMargin = (value) => (dispatch) => {
	dispatch(actionsFlexbox.changeMargin(value))
}

export const togglePrefixes = (value) => (dispatch) => {
	dispatch(actionsFlexbox.togglePrefixes(value))
}

export const mainControlsChange = (value, key) => (dispatch) => {
	dispatch(actionsFlexbox.mainControlsChange(value, key))
}

export const singleControlsChange = (value, index, type) => (dispatch) => {
	dispatch(actionsFlexbox.singleControlsChange(value, index, type))
}