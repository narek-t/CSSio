import defaultValues from '../store/defaultValues'
import * as Util from '../../../globals/Util'
import * as actionsFlexbox from '../store/actions'

const reducerFlexbox = (state = defaultValues, action) => {

	switch (action.type) {

		case actionsFlexbox.CHANGE_MARGIN :
			return {
				...state,
				itemsMargin: action.payload.value,
			}

		case actionsFlexbox.TOGGLE_PREFIXES :
			return {
				...state,
				prefixes: action.payload.value,
			}

		case actionsFlexbox.ADD_ITEM :
			return {
				...state,
				flexItems: state.flexItems.concat({...defaultValues.flexItem, id: Util.uniqID()})
			}

		case actionsFlexbox.DELETE_ITEM :
			const flexItemsWithDeletedItem = Util.deleteArrayItem(state.flexItems, action.payload.index)
			return {
				...state,
				flexItems: flexItemsWithDeletedItem
			}

		case actionsFlexbox.MAIN_CONTROLS_CHANGE :
			return {
				...state,
				[action.payload.key]: action.payload.value
			}

		case actionsFlexbox.SINGLE_CONTROLS_CHANGE :
			const updatedArray = Util.updateObjectInArray(state.flexItems, action.payload.value, action.payload.index, action.payload.type)
			return {
				...state,
				flexItems: updatedArray
			}

		case actionsFlexbox.RESET_STATE :
			return {
				...defaultValues
			}



		default:
			return state
	}

}

export default reducerFlexbox