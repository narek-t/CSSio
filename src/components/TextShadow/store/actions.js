export const ADD_SHADOW = 'TEXT_SHADOW_CONTAINER_ADD_SHADOW'
export const addShadow = () => ({
	type: ADD_SHADOW,
	payload: {},
})

export const CHANGE_SHADOW = 'TEXT_SHADOW_CONTAINER_CHANGE_SHADOW'
export const changeShadow = (value, type, index) => ({
	type: CHANGE_SHADOW,
	payload: {value, type, index},
})

export const RESET_TEXT_SHADOW_STATE = 'TEXT_SHADOW_CONTAINER_RESET_TEXT_SHADOW_STATE'
export const resetTextShadowState = () => ({
	type: RESET_TEXT_SHADOW_STATE,
	payload: {},
})

export const CHANGE_COLOR = 'TEXT_SHADOW_CONTAINER_CHANGE_COLOR'
export const changeColor = (value, type) => ({
	type: CHANGE_COLOR,
	payload: {value, type},
})

export const DELETE_SHADOW = 'TEXT_SHADOW_CONTAINER_DELETE_SHADOW'
export const deleteShadow = (index) => ({
	type: DELETE_SHADOW,
	payload: {index},
})

export const FONT_SIZE_CHANGE = 'TEXT_SHADOW_CONTAINER_FONT_SIZE_CHANGE'
export const fontSizeChange = (value) => ({
	type: FONT_SIZE_CHANGE,
	payload: {value},
})