import * as actionsFilters from '../store/actions'


export const onRangeChange = (value, index, type) => (dispatch) => {
	dispatch(actionsFilters.changeRange(value, index, type))
}

export const resetFilters = () => (dispatch) => {
	dispatch(actionsFilters.resetFilters())
}