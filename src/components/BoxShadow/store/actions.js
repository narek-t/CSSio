export const ADD_SHADOW = 'BOX_SHADOW_CONTAINER_ADD_SHADOW'
export const addShadow = () => ({
	type: ADD_SHADOW,
	payload: {},
})

export const CHANGE_SHADOW = 'BOX_SHADOW_CONTAINER_CHANGE_SHADOW'
export const changeShadow = (value, type, index) => ({
	type: CHANGE_SHADOW,
	payload: {value, type, index},
})

export const RESET_BOX_SHADOW_STATE = 'BOX_SHADOW_CONTAINER_RESET_BOX_SHADOW_STATE'
export const resetBoxShadowState = () => ({
	type: RESET_BOX_SHADOW_STATE,
	payload: {},
})

export const CHANGE_COLOR = 'BOX_SHADOW_CONTAINER_CHANGE_COLOR'
export const changeColor = (value, type) => ({
	type: CHANGE_COLOR,
	payload: {value, type},
})

export const TOGGLE_PREFIXES = 'BOX_SHADOW_CONTAINER_TOGGLE_PREFIXES'
export const togglePrefixes = (value) => ({
	type: TOGGLE_PREFIXES,
	payload: {value},
})

export const DELETE_SHADOW = 'BOX_SHADOW_CONTAINER_DELETE_SHADOW'
export const deleteShadow = (index) => ({
	type: DELETE_SHADOW,
	payload: {index},
})