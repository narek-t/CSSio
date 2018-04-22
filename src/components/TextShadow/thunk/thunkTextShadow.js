import * as actionsTextShadow from '../store/actions'

export const addShadow = () => (dispatch) => {
	dispatch(actionsTextShadow.addShadow())
}

export const changeShadow = (value, type, index) => (dispatch) => {
	dispatch(actionsTextShadow.changeShadow(value, type, index))
}

export const resetTextShadowState = () => (dispatch) => {
	dispatch(actionsTextShadow.resetTextShadowState())
}

export const changeColor = (value, type) => (dispatch) => {
	dispatch(actionsTextShadow.changeColor(value, type))
}

export const deleteShadow = (index) => (dispatch) => {
	dispatch(actionsTextShadow.deleteShadow(index))
}

export const fontSizeChange = (value) => (dispatch) => {
	dispatch(actionsTextShadow.fontSizeChange(value))
}