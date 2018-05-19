import * as actionsKenBurns from '../store/actions'

export const resetKenBurnState = () => (dispatch) => {
	dispatch(actionsKenBurns.resetKenBurnState())
}

export const imageChange = (e) => (dispatch) => {
	e.preventDefault();

	let reader = new FileReader();
	let file = e.target.files[0];

	if (file) {
		reader.readAsDataURL(file)
	}

	reader.onloadend = () => {
		dispatch(actionsKenBurns.changeImage(reader.result))
	}
}

export const animationSettingsChange = (value, name) => (dispatch) => {
	dispatch(actionsKenBurns.animationSettingsChange(value, name))
}

export const refresh = () => (dispatch) => {
	dispatch(actionsKenBurns.refresh())
}