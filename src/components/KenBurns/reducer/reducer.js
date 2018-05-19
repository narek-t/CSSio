import defaultValues from '../store/defaultValues'
import * as Util from '../../../globals/Util'
import * as actionsKenBurns from '../store/actions'

const reducerKenBurns = (state = defaultValues, action) => {

	switch (action.type) {

		case actionsKenBurns.CHANGE_IMAGE :
			return {
				...state,
				imageUrl: action.payload.url
			}

		case actionsKenBurns.ANIMATION_SETTINGS_CHANGE :
			const newAnimationSettings = Util.changeObjectItem(state.animationSettings, action.payload.value, action.payload.name)
			return {
				...state,
				animationSettings: newAnimationSettings
			}

		case actionsKenBurns.REFRESH :
			return {
				...state,
				refresh: Math.random()
			}

		case actionsKenBurns.RESET_KEN_BURNS :
			return {
				...defaultValues
			}

		default:
			return state
	}

}

export default reducerKenBurns