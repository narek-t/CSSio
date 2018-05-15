import defaultValues from '../store/defaultValues'
import * as actionsTransform from '../store/actions'
import * as Util from '../../../globals/Util'

const reducerTransform = (state = defaultValues, action) => {

	switch (action.type) {

		case actionsTransform.CHANGE_RANGE :
			const newTransformArray = Util.updateObjectInArray(state.transforms, action.payload.value, action.payload.index, action.payload.type)
			return {
				...state,
				transforms: newTransformArray,
			}

		case actionsTransform.SPIN_TOGGLE :
			return {
				...state,
				isSpinning: action.payload.value,
			}

		case actionsTransform.BACKFACE_VISIBILITY_CHANGE :
			return {
				...state,
				backfaceVisibility: action.payload.value,
			}

		case actionsTransform.RESET_STATE :
			return {
				...defaultValues,
			}

		default:
			return state
	}
}

export default reducerTransform