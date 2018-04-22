import * as actionsBoxShadow from '../store/actions'

export const addShadow = () => (dispatch) => {
	dispatch(actionsBoxShadow.addShadow())
}

export const changeShadow = (value, type, index) => (dispatch) => {
	dispatch(actionsBoxShadow.changeShadow(value, type, index))
}

export const resetBoxShadowState = () => (dispatch) => {
	dispatch(actionsBoxShadow.resetBoxShadowState())
}

export const changeColor = (value, type) => (dispatch) => {
	dispatch(actionsBoxShadow.changeColor(value, type))
}

export const togglePrefixes = (value) => (dispatch) => {
	dispatch(actionsBoxShadow.togglePrefixes(value))
}

export const deleteShadow = (index) => (dispatch) => {
	dispatch(actionsBoxShadow.deleteShadow(index))
}