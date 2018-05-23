export const HANDLE_CHANGE = 'ANIMATED_GRADIENT_CONTAINER_HANDLE_CHANGE'
export const handleChange = (newGradients) => ({
	type: HANDLE_CHANGE,
	payload: {newGradients}
})

export const SET_NEW_STOP_ITEM = 'ANIMATED_GRADIENT_CONTAINER_SET_NEW_STOP_ITEM'
export const setNewStopItem = (gradientWithNewStopItem) => ({
	type: SET_NEW_STOP_ITEM,
	payload: {gradientWithNewStopItem}
})

export const HANDLE_DELETE = 'ANIMATED_GRADIENT_CONTAINER_HANDLE_DELETE'
export const handleDelete = (gradientsWithDeletedItem) => ({
	type: HANDLE_DELETE,
	payload: {gradientsWithDeletedItem}
})

export const RESET_STATE = 'ANIMATED_GRADIENT_CONTAINER_RESET_STATE'
export const resetState = () => ({
	type: RESET_STATE,
	payload: {}
})

export const CHANGE_TYPE = 'ANIMATED_GRADIENT_CONTAINER_CHANGE_TYPE'
export const changeType = (value) => ({
	type: CHANGE_TYPE,
	payload: {value}
})

export const CHANGE_ANGLE = 'ANIMATED_GRADIENT_CONTAINER_CHANGE_ANGLE'
export const changeAngle = (value) => ({
	type: CHANGE_ANGLE,
	payload: {value}
})

export const ANIMATION_SETTINGS_CHANGE = 'ANIMATED_GRADIENT_CONTAINER_ANIMATION_SETTINGS_CHANGE'
export const animationSettingsChange = (value, name) => ({
	type: ANIMATION_SETTINGS_CHANGE,
	payload: {value, name},
})

export const REFRESH = 'ANIMATED_GRADIENT_CONTAINER_REFRESH'
export const refresh = () => ({
	type: REFRESH,
	payload: {},
})