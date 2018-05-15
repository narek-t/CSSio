import * as actionsTransform from '../store/actions'

export const changeRange = (value, index, type) => (dispatch) => {
	dispatch(actionsTransform.changeRange(value, index, type))
}

export const resetState = () => (dispatch) => {
	dispatch(actionsTransform.resetState())
}

export const spinToggle = (value) => (dispatch) => {
	dispatch(actionsTransform.spinToggle(value))
}

export const backfaceVisibilityChange = (value) => (dispatch) => {
	dispatch(actionsTransform.backfaceVisibilityChange(value))
}