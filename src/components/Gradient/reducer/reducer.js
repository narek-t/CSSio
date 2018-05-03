import * as actionsGradient from '../store/actions'
import defaultValues from '../store/defaultValues'
import * as Util from '../../../globals/Util'

const reducerGradient = (state = defaultValues, action) => {
	switch (action.type) {
		case actionsGradient.HANDLE_CHANGE :
			let newGradients;
			let pxValue, percentageValue;

			if (action.payload.from === 'fromColor') {
				newGradients = Util.updateObjectInArray(state.gradients, Util.transformColorType(action.payload.value), null, 'color', action.payload.id)
			} else if (action.payload.from === 'fromDrag') {

				pxValue = +action.payload.value;
				percentageValue = +(action.payload.value * 101 / 1128).toFixed()

				newGradients = Util.updateObjectsInArray(state.gradients, action.payload.id, {
					positionPx: pxValue,
					positionPercentage: percentageValue
				})


			} else if (action.payload.from === 'fromInput') {
				pxValue = +(1128 * +action.payload.value / 101).toFixed()
				percentageValue = action.payload.value;
				newGradients = Util.updateObjectsInArray(state.gradients, action.payload.id, {
					positionPx: pxValue,
					positionPercentage: percentageValue
				})
			}

			return {
				...state,
				gradients: newGradients
			}

		case actionsGradient.SET_NEW_STOP_ITEM :
			const gradientWithNewStopItem = state.gradients.concat({
				color: action.payload.color,
				positionPx: action.payload.clickedPosition,
				positionPercentage: action.payload.percentage,
				id: action.payload.id

			})
			return {
				...state,
				gradients: gradientWithNewStopItem
			}

		case actionsGradient.HANDLE_DELETE :
			const gradientsWithDeletedItem = Util.deleteArrayItem(state.gradients, action.payload.id, 'deleteByID')
			return {
				...state,
				gradients: gradientsWithDeletedItem
			}

		case actionsGradient.CHANGE_TYPE :
			return {
				...state,
				type: action.payload.value,
			}

		case actionsGradient.CHANGE_ANGLE :
			return {
				...state,
				angle: action.payload.value,
			}

		case actionsGradient.RESET_STATE :
			return {
				...defaultValues
			}

		default:
			return state
	}
}

export default reducerGradient