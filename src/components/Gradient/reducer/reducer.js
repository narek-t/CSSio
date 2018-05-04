import * as actionsGradient from '../store/actions'
import defaultValues from '../store/defaultValues'


const reducerGradient = (state = defaultValues, action) => {
	switch (action.type) {
		case actionsGradient.HANDLE_CHANGE :
			return {
				...state,
				gradients: action.payload.newGradients
			}

		case actionsGradient.SET_NEW_STOP_ITEM :
			return {
				...state,
				gradients: action.payload.gradientWithNewStopItem
			}

		case actionsGradient.HANDLE_DELETE :
			return {
				...state,
				gradients: action.payload.gradientsWithDeletedItem
			}

		case actionsGradient.CHANGE_TYPE :
			return {
				...state,
				type: action.payload.value,
			}

		case actionsGradient.CHANGE_ANGLE :
			return {
				...state,
				angle: action.payload.value,
			}

		case actionsGradient.RESET_STATE :
			return {
				...defaultValues
			}

		default:
			return state
	}
}

export default reducerGradient