export const CHANGE_RANGE = 'TRANSFORM_CONTAINER_CHANGE_RANGE'
export const changeRange = (value, index, type) => ({
	type: CHANGE_RANGE,
	payload: {value, index, type},
})

export const RESET_STATE = 'TRANSFORM_CONTAINER_RESET_STATE'
export const resetState = () => ({
	type: RESET_STATE,
	payload: {},
})

export const SPIN_TOGGLE = 'TRANSFORM_CONTAINER_SPIN_TOGGLE'
export const spinToggle = (value) => ({
	type: SPIN_TOGGLE,
	payload: {value},
})

export const BACKFACE_VISIBILITY_CHANGE = 'TRANSFORM_CONTAINER_BACKFACE_VISIBILITY_CHANGE'
export const backfaceVisibilityChange = (value) => ({
	type: BACKFACE_VISIBILITY_CHANGE,
	payload: {value},
})