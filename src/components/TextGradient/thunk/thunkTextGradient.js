import * as actionsTextGradient from '../store/actions'
import * as Util from '../../../globals/Util'

export const setNewStopItem = (event, gradients, id) => (dispatch, getState) => {
	let state = getState();
	let reducerState = state.reducerTextGradient

	const parentWidth = event.target.clientWidth;
	const offset = event.target.getClientRects()[0];
	const clickedPosition = event.clientX - offset.left;
	const canvas = document.createElement('canvas');
	canvas.width = parentWidth;
	canvas.height = 60;
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, parentWidth, 60);
	gradients.forEach(i => {
		gradient.addColorStop(i.positionPercentage / 100, i.color);
	})
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, parentWidth, 60);
	const color = ctx.getImageData(clickedPosition, 1, 1, 1).data;
	const isRGBA = (color[3] / 255).toFixed(2) !== '1.00'
	let transformedColor = Util.rgbToHex(color[0], color[1], color[2])

	if (isRGBA) {
		transformedColor = 'rgba(' + color[0] + ', ' + color[1] +
			', ' + color[2] + ', ' + (color[3] / 255).toFixed(2) + ')';
	}
	const percentage  = +(clickedPosition * 100 / parentWidth).toFixed()

	const gradientWithNewStopItem = reducerState.gradients.concat({
		color: transformedColor,
		positionPx: clickedPosition,
		positionPercentage: percentage,
		id: id
	})

	dispatch(actionsTextGradient.setNewStopItem(gradientWithNewStopItem))

}

export const handleChange = (value, id, from) => (dispatch, getState) => {
	let state = getState();
	let reducerState = state.reducerTextGradient
	let newGradients;
	let pxValue, percentageValue;

	if (from === 'fromColor') {
		newGradients = Util.updateObjectInArray(reducerState.gradients, Util.transformColorType(value), null, 'color', id)
	} else if (from === 'fromDrag') {
		pxValue = +value;
		percentageValue = +(value * 101 / 1128).toFixed()

		newGradients = Util.updateObjectsInArray(reducerState.gradients, id, {
			positionPx: pxValue,
			positionPercentage: percentageValue
		})
	} else if (from === 'fromInput') {
		pxValue = +(1128 * +value / 101).toFixed()
		percentageValue = value;
		newGradients = Util.updateObjectsInArray(reducerState.gradients, id, {
			positionPx: pxValue,
			positionPercentage: percentageValue
		})
	}

	dispatch(actionsTextGradient.handleChange(newGradients))
}

export const handleDelete = (id) => (dispatch, getState) => {
	let state = getState();
	let reducerState = state.reducerTextGradient
	const gradientsWithDeletedItem = Util.deleteArrayItem(reducerState.gradients,id, 'deleteByID')
	dispatch(actionsTextGradient.handleDelete(gradientsWithDeletedItem))
}

export const resetGradientState = () => (dispatch) => {
	dispatch(actionsTextGradient.resetState())
}

export const changeType = (value) => (dispatch) => {
	dispatch(actionsTextGradient.changeType(value))
}

export const changeAngle = (value) => (dispatch) => {
	dispatch(actionsTextGradient.changeAngle(value))
}

export const fontSizeChange = (value) => (dispatch) => {
	dispatch(actionsTextGradient.fontSizeChange(value))
}