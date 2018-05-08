export const RESET_STATE = 'FLEXBOX_CONTAINER_RESET_STATE'
export const resetState = () => ({
	type: RESET_STATE,
	payload: {},
})

export const ADD_ITEM = 'FLEXBOX_CONTAINER_ADD_ITEM'
export const addItem = () => ({
	type: ADD_ITEM,
	payload: {},
})

export const DELETE_ITEM = 'FLEXBOX_CONTAINER_DELETE_ITEM'
export const deleteItem = (index) => ({
	type: DELETE_ITEM,
	payload: {index},
})

export const CHANGE_MARGIN = 'FLEXBOX_CONTAINER_CHANGE_MARGIN'
export const changeMargin = (value) => ({
	type: CHANGE_MARGIN,
	payload: {value},
})

export const TOGGLE_PREFIXES = 'FLEXBOX_CONTAINER_TOGGLE_PREFIXES'
export const togglePrefixes = (value) => ({
	type: TOGGLE_PREFIXES,
	payload: {value},
})

export const MAIN_CONTROLS_CHANGE = 'FLEXBOX_CONTAINER_MAIN_CONTROLS_CHANGES'
export const mainControlsChange = (value, key) => ({
	type: MAIN_CONTROLS_CHANGE,
	payload: {value, key},
})

export const SINGLE_CONTROLS_CHANGE = 'FLEXBOX_CONTAINER_SINGLE_CONTROLS_CHANGES'
export const singleControlsChange = (value, index, type) => ({
	type: SINGLE_CONTROLS_CHANGE,
	payload: {value, index, type},
})