export const checkNumberInput = (event, maxValue, minValue, oldValue) => {
	let value = +event.target.value

	if (isNaN(value) || typeof value === 'string') {
		return oldValue
	}

	if (value > maxValue) {
		value = maxValue
	} else if (value < minValue) {
		value = minValue
	}
	return value
}

export const transformColorType = (color) => {
	const joinRgbaToString = (rgbaColor) => {
		return `rgba(${ rgbaColor.r }, ${ rgbaColor.g }, ${ rgbaColor.b }, ${ rgbaColor.a })`
	}
	return color.rgb.a !== 1 ? joinRgbaToString(color.rgb) : color.hex
}


export const changeShadowItem = (shadowItems, action) => {
	let value = action.payload.value

	if (action.payload.type === 'shadowColor') {
		value = transformColorType(action.payload.value)
	}

	return updateObjectInArray(shadowItems, value, action.payload.index, action.payload.type)
}

export const deleteArrayItem = (array, index) => {
	return array.filter( (item, i) => i !== index);
}

export const stylesArray = (shadowItems) => {
	return Array.isArray(shadowItems) && shadowItems.length ?
		shadowItems.map((shadowItem, index) => {
			return (
				(shadowItem.type ? 'inset ' : '') +
				shadowItem.horizontal + 'px ' + shadowItem.vertical + 'px ' +
				shadowItem.blur + 'px ' + (shadowItem.spread ? shadowItem.spread + 'px ' : '') +
				shadowItem.shadowColor +
				(shadowItems.length === index+1 ? '' : ', ')
			)

		}) : null
}

export const transformBoxShadowStyles = (stylesArray, prefixes, type) => {
	let code =  'box-shadow: ' + stylesArray.join('') + ';'
	if (type === 'forView') {
		code =  'box-shadow: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
	}
	if (prefixes) {
		code = code+'\r\n-webkit-'+code+'\r\n-moz-'+code
	}
	return code

}

export const transformTextShadowStyles = (stylesArray, type) => {
	let code =  'text-shadow: ' + stylesArray.join('') + ';'
	if (type === 'forView') {
		code =  'text-shadow: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
	}
	return code

}


export const updateObjectInArray = (array, value, index, type) => {
	return array.map((item, i) => i === index ?
		{
			...item,
			[type]: value
		} : item
	)
}

export const makeFiltersStylesArray = (filters) => {
	const changedStylesArray = filters.filter(filter => {
		return filter.defaultValue !== filter.value
	})
	if (changedStylesArray.length < 1) return

	return  changedStylesArray.map((item, index) => {
		return item.name + `(${item.value}${item.units})`+ (changedStylesArray.length === index+1 ? '' : ' ')
	})
}

export const transformFiltersStyles = (stylesArray, type) => {

	if (Array.isArray(stylesArray) && stylesArray.length) {
		let code =  'filter: ' + stylesArray.join('') + ';' + '\r\n' + '-webkit-filter: ' + stylesArray.join('') + ';'

		if (type === 'forView') {
			code =  'filter: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';' + '\r\n' + '-webkit-filter: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
		}
		return code
	}


}
