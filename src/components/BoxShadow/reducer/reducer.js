import defaultValues from '../store/defaultValues'
import * as actionsBoxShadow from '../store/actions'
import * as Util from '../../../globals/Util'

const reducerBoxShadow = (state = defaultValues, action) => {

	switch (action.type) {
		case actionsBoxShadow.ADD_SHADOW :
			return {
				...state,
				shadowItems: state.shadowItems.concat({...defaultValues.shadowItem}),
				stylesArray: Util.stylesArray(state.shadowItems.concat(defaultValues.shadowItem))
			}

		case actionsBoxShadow.DELETE_SHADOW :
			const shadowItemsWithDeletedItem = Util.deleteArrayItem(state.shadowItems, action.payload.index)
			return {
				...state,
				shadowItems: shadowItemsWithDeletedItem,
				stylesArray: Util.stylesArray(shadowItemsWithDeletedItem)
			}


		case actionsBoxShadow.CHANGE_SHADOW :
			const shadowItemsWithChangedRange = Util.changeShadowItem(state.shadowItems, action)
			return {
				...state,
				shadowItems: shadowItemsWithChangedRange,
				stylesArray: Util.stylesArray(shadowItemsWithChangedRange)
			}

		case actionsBoxShadow.CHANGE_COLOR :
			return {
				...state,
				[action.payload.type]: Util.transformColorType(action.payload.value)
			}

		case actionsBoxShadow.TOGGLE_PREFIXES :
			return {
				...state,
				prefixes: action.payload.value
			}

		case actionsBoxShadow.RESET_BOX_SHADOW_STATE :
			return {
				...defaultValues,
			}

		default:
			return state
	}
}

export default reducerBoxShadow