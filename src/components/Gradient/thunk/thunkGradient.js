import * as actionsGradient from '../store/actions'
import * as Util from '../../../globals/Util'

export const setNewStopItem = (event, gradients, id) => (dispatch) => {
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

	dispatch(actionsGradient.setNewStopItem(transformedColor, percentage, clickedPosition, id))

}

export const handleChange = (value, id, from) => (dispatch) => {
	dispatch(actionsGradient.handleChange(value,id, from))
}

export const handleDelete = (id) => (dispatch) => {
	dispatch(actionsGradient.handleDelete(id))
}

export const resetGradientState = () => (dispatch) => {
	dispatch(actionsGradient.resetState())
}

export const changeType = (value) => (dispatch) => {
	dispatch(actionsGradient.changeType(value))
}

export const changeAngle = (value) => (dispatch) => {
	dispatch(actionsGradient.changeAngle(value))
}