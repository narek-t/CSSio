import defaultValues from '../store/defaultValues'
import * as actionsFilters from '../store/actions'
import * as Util from '../../../globals/Util'

const reducerFilter = (state = defaultValues, action) => {

	switch (action.type) {

		case actionsFilters.CHANGE_RANGE :
			const newFiltersArray = Util.updateObjectInArray(state.filters, action.payload.value, action.payload.index, action.payload.type)
			return {
				...state,
				filters: newFiltersArray,
				stylesArray: Util.makeFiltersStylesArray(newFiltersArray)
			}

		case actionsFilters.RESET_FILTERS :
			return {
				...defaultValues
			}

		default:
			return state
	}

}

export default reducerFilter