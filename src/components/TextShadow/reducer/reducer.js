import defaultValues from '../store/defaultValues'
import * as actionsTextShadow from '../store/actions'
import * as Util from '../../../globals/Util'

const reducerTextShadow = (state = defaultValues, action) => {

	switch (action.type) {
		case actionsTextShadow.ADD_SHADOW :
			return {
				...state,
				shadowItems: state.shadowItems.concat({...defaultValues.shadowItem}),
				stylesArray: Util.stylesArray(state.shadowItems.concat(defaultValues.shadowItem))
			}

		case actionsTextShadow.DELETE_SHADOW :
			const shadowItemsWithDeletedItem = Util.deleteArrayItem(state.shadowItems, action.payload.index)
			return {
				...state,
				shadowItems: shadowItemsWithDeletedItem,
				stylesArray: Util.stylesArray(shadowItemsWithDeletedItem)
			}


		case actionsTextShadow.CHANGE_SHADOW :
			const shadowItemsWithChangedRange = Util.changeShadowItem(state.shadowItems, action)
			return {
				...state,
				shadowItems: shadowItemsWithChangedRange,
				stylesArray: Util.stylesArray(shadowItemsWithChangedRange)
			}

		case actionsTextShadow.CHANGE_COLOR :
			return {
				...state,
				[action.payload.type]: Util.transformColorType(action.payload.value)
			}

		case actionsTextShadow.FONT_SIZE_CHANGE :
			return {
				...state,
				fontSize: action.payload.value
			}


		case actionsTextShadow.RESET_TEXT_SHADOW_STATE :
			return {
				...defaultValues,
			}

		default:
			return state
	}
}

export default reducerTextShadow