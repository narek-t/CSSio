import * as actionsTextGradient from '../store/actions'
import defaultValues from '../store/defaultValues'


const reducerTextGradient = (state = defaultValues, action) => {
	switch (action.type) {
		case actionsTextGradient.HANDLE_CHANGE :
			return {
				...state,
				gradients: action.payload.newGradients
			}

		case actionsTextGradient.SET_NEW_STOP_ITEM :
			return {
				...state,
				gradients: action.payload.gradientWithNewStopItem
			}

		case actionsTextGradient.HANDLE_DELETE :
			return {
				...state,
				gradients: action.payload.gradientsWithDeletedItem
			}

		case actionsTextGradient.CHANGE_TYPE :
			return {
				...state,
				type: action.payload.value,
			}

		case actionsTextGradient.CHANGE_ANGLE :
			return {
				...state,
				angle: action.payload.value,
			}

		case actionsTextGradient.RESET_STATE :
			return {
				...defaultValues
			}

		case actionsTextGradient.FONT_SIZE_CHANGE :
			return {
				...state,
				fontSize: action.payload.value
			}

		default:
			return state
	}
}

export default reducerTextGradient