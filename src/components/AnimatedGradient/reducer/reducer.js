import * as actionsAnimatedGradient from '../store/actions'
import defaultValues from '../store/defaultValues'
import * as Util from '../../../globals/Util'


const reducerAnimatedGradient = (state = defaultValues, action) => {
	switch (action.type) {
		case actionsAnimatedGradient.HANDLE_CHANGE :
			return {
				...state,
				gradients: action.payload.newGradients
			}

		case actionsAnimatedGradient.SET_NEW_STOP_ITEM :
			return {
				...state,
				gradients: action.payload.gradientWithNewStopItem
			}

		case actionsAnimatedGradient.HANDLE_DELETE :
			return {
				...state,
				gradients: action.payload.gradientsWithDeletedItem
			}

		case actionsAnimatedGradient.CHANGE_TYPE :
			return {
				...state,
				type: action.payload.value,
			}

		case actionsAnimatedGradient.CHANGE_ANGLE :
			return {
				...state,
				angle: action.payload.value,
			}

		case actionsAnimatedGradient.ANIMATION_SETTINGS_CHANGE :
			const newAnimationSettings = Util.changeObjectItem(state.animationSettings, action.payload.value, action.payload.name)
			return {
				...state,
				animationSettings: newAnimationSettings
			}

		case actionsAnimatedGradient.REFRESH :
			return {
				...state,
				refresh: Math.random()
			}

		case actionsAnimatedGradient.RESET_STATE :
			return {
				...defaultValues
			}

		default:
			return state
	}
}

export default reducerAnimatedGradient