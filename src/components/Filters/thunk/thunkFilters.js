import * as actionsFilters from '../store/actions'


export const onRangeChange = (value, index, type) => (dispatch) => {
	dispatch(actionsFilters.changeRange(value, index, type))
}

export const resetFilters = () => (dispatch) => {
	dispatch(actionsFilters.resetFilters())
}

export const imageChange = (e) => (dispatch) => {
	e.preventDefault();

	let reader = new FileReader();
	let file = e.target.files[0];

	if (file) {
		reader.readAsDataURL(file)
	}

	reader.onloadend = () => {
		dispatch(actionsFilters.changeImage(reader.result))
	}
}