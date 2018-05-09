import flexDefaultValues from '../components/Flexbox/store/defaultValues'

export const uniqID = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const rgbToHex = (r, g, b) => {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const checkNumberInput = (event, maxValue, minValue, oldValue) => {
	let value = +event.target.value;

	if (isNaN(value) || typeof value === 'string') {
		return oldValue
	}

	if (value > maxValue) {
		value = maxValue
	} else if (value < minValue) {
		value = minValue
	}
	return value
};

export const transformColorType = (color) => {
	const joinRgbaToString = (rgbaColor) => {
		return `rgba(${ rgbaColor.r }, ${ rgbaColor.g }, ${ rgbaColor.b }, ${ rgbaColor.a })`
	};
	return color.rgb.a !== 1 ? joinRgbaToString(color.rgb) : color.hex
};


export const changeShadowItem = (shadowItems, action) => {
	let value = action.payload.value;

	if (action.payload.type === 'shadowColor') {
		value = transformColorType(action.payload.value)
	}

	return updateObjectInArray(shadowItems, value, action.payload.index, action.payload.type)
};

export const deleteArrayItem = (array, index, type) => {
	if (type === 'deleteByID') {
		return array.filter( (item) => item.id !== index);
	}
	return array.filter( (item, i) => i !== index);
};

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
};

export const transformBoxShadowStyles = (stylesArray, prefixes, type) => {
	let code =  'box-shadow: ' + stylesArray.join('') + ';';
	if (type === 'forView') {
		code =  'box-shadow: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
	}
	if (prefixes) {
		code = code+'\r\n-webkit-'+code+'\r\n-moz-'+code
	}
	return code

};

export const transformTextShadowStyles = (stylesArray, type) => {
	let code =  'text-shadow: ' + stylesArray.join('') + ';';
	if (type === 'forView') {
		code =  'text-shadow: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
	}
	return code

};


export const updateObjectInArray = (array, value, index, type, id) => {
	return array.map((item, i) => {
		let changeBy = i;
		let changeFor = index;
		if (id) {
			changeBy = id;
			changeFor = item.id
		}
		return changeBy === changeFor ?
			{
				...item,
				[type]: value
			} : item
	})
};

export const updateObjectsInArray = (array, id, values) => {
	return array.map(item => {
		return id === item.id ?
			{
				...item,
				...values,
			} : item
	})
};

export const makeFiltersStylesArray = (filters) => {
	const changedStylesArray = filters.filter(filter => {
		return filter.defaultValue !== filter.value
	});
	if (changedStylesArray.length < 1) return;

	return  changedStylesArray.map((item, index) => {
		return item.name + `(${item.value}${item.units})`+ (changedStylesArray.length === index+1 ? '' : ' ')
	})
};

export const transformFiltersStyles = (stylesArray, type) => {

	if (Array.isArray(stylesArray) && stylesArray.length) {
		let code =  'filter: ' + stylesArray.join('') + ';\r\n-webkit-filter: ' + stylesArray.join('') + ';';

		if (type === 'forView') {
			code =  'filter: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';\r\n-webkit-filter: ' + stylesArray.join('\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0') + ';'
		}
		return code
	}

};


export const fileSizes = (bytes,decimals) => {
	if(bytes === 0) return '0 Bytes';
	const k = 1024,
		dm = decimals || 2,
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const transformGradientStyles = (gradients, angle, type, predestination) => {
	const sortedGradients = sortArray(gradients, 'positionPercentage');
	const mappedGradients = sortedGradients.map(gradient => {
		return (
			gradient.color + ' ' + gradient.positionPercentage + '%'
		)
	});
	let gradientCss = `linear-gradient(${angle ? angle+'deg, ' : ''} ${mappedGradients.join(', ')})`;

	if (type === 'radial') {
		gradientCss =  `radial-gradient(circle, ${mappedGradients.join(', ')})`
	}

	if (predestination === 'forCode') {
		gradientCss = 'background: ' + mappedGradients[0].split(' ')[0] + ';\r\nbackground: ' + gradientCss + ';'
	}

	if (predestination === 'forTextGradientCode') {
		gradientCss = 'background: ' + mappedGradients[0].split(' ')[0] + ';\r\nbackground: ' + gradientCss + ';\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;'
	}

	return gradientCss

};


export const sortArray = (array, key) => {
	return array.concat().sort((a, b) => {
		let keyA = a[key], keyB = b[key];
		return keyA-keyB
	});
};

export const transformFlexboxStyles = (state) => {

	let mainStyles, itemStyles = [], allStyles = [];

	mainStyles = `.flex-container {
${state.prefixes ?
state.display === 'flex' ?
	`\xa0\xa0\xa0\xa0display: -ms-flexbox;
\xa0\xa0\xa0\xa0display: -webkit-flex;
\xa0\xa0\xa0\xa0display: flex;` : 
	`\xa0\xa0\xa0\xa0display: -ms-inline-flexbox;
\xa0\xa0\xa0\xa0display: -webkit-inline-flex;
\xa0\xa0\xa0\xa0display: inline-flex;`
: `\xa0\xa0\xa0\xa0display: ${state.display};`}
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-flex-direction: ${state.flexDirection};
 \xa0\xa0\xa0\xa0-ms-flex-direction: ${state.flexDirection};\r\n`
: ''}\xa0\xa0\xa0\xa0flex-direction: ${state.flexDirection};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-flex-wrap: ${state.flexWrap};
 \xa0\xa0\xa0\xa0-ms-flex-wrap: ${state.flexWrap};\r\n`
: ''}\xa0\xa0\xa0\xa0flex-wrap: ${state.flexWrap};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-justify-content: ${state.justifyContent};
 \xa0\xa0\xa0\xa0-ms-flex-pack: ${state.justifyContent};\r\n`
: ''}\xa0\xa0\xa0\xa0justify-content: ${state.justifyContent};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-align-items: ${state.alignItems};
 \xa0\xa0\xa0\xa0-ms-flex-align: ${state.alignItems};\r\n`
: ''}\xa0\xa0\xa0\xa0align-items: ${state.alignItems};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-align-content: ${state.alignContent};
 \xa0\xa0\xa0\xa0-ms-flex-line-pack: ${state.alignContent};\r\n`
: ''}\xa0\xa0\xa0\xa0align-content: ${state.alignContent};
}\r\n\r\n`;


	let changedItems = state.flexItems.map(item => {
		return JSON.stringify(item) !== JSON.stringify(flexDefaultValues.flexItem)
	})

	let defaultItemStyles = `.flex-item {
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-order: ${flexDefaultValues.flexItem.order};
\xa0\xa0\xa0\xa0-ms-flex-order: ${flexDefaultValues.flexItem.order};\r\n`
: ''}\xa0\xa0\xa0\xa0order: ${flexDefaultValues.flexItem.order};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-flex: ${flexDefaultValues.flexItem.flexGrow} ${flexDefaultValues.flexItem.flexShrink} ${flexDefaultValues.flexItem.flexBasis};
\xa0\xa0\xa0\xa0-ms-flex: ${flexDefaultValues.flexItem.flexGrow} ${flexDefaultValues.flexItem.flexShrink} ${flexDefaultValues.flexItem.flexBasis};\r\n`
: ''}\xa0\xa0\xa0\xa0flex: ${flexDefaultValues.flexItem.flexGrow} ${flexDefaultValues.flexItem.flexShrink} ${flexDefaultValues.flexItem.flexBasis};
${state.prefixes ? 
`\xa0\xa0\xa0\xa0-webkit-align-self: ${flexDefaultValues.flexItem.alignSelf};
\xa0\xa0\xa0\xa0-ms-flex-item-align: ${flexDefaultValues.flexItem.alignSelf};\r\n`
: ''}\xa0\xa0\xa0\xa0align-self: ${flexDefaultValues.flexItem.alignSelf};
}\r\n\r\n`


	changedItems.forEach((item, index) => {
		if (item) {
			itemStyles.push(
`.flex-item:nth-child(${index+1}) {
${state.prefixes ?
`\xa0\xa0\xa0\xa0-webkit-order: ${state.flexItems[index].order};
\xa0\xa0\xa0\xa0-ms-flex-order: ${state.flexItems[index].order};\r\n`
: ''}\xa0\xa0\xa0\xa0order: ${state.flexItems[index].order};
${state.prefixes ?
`\xa0\xa0\xa0\xa0-webkit-flex: ${state.flexItems[index].flexGrow} ${state.flexItems[index].flexShrink} ${state.flexItems[index].flexBasis};
\xa0\xa0\xa0\xa0-ms-flex: ${state.flexItems[index].flexGrow} ${state.flexItems[index].flexShrink} ${state.flexItems[index].flexBasis};\r\n`
: ''}\xa0\xa0\xa0\xa0flex: ${state.flexItems[index].flexGrow} ${state.flexItems[index].flexShrink} ${state.flexItems[index].flexBasis};
${state.prefixes ?
`\xa0\xa0\xa0\xa0-webkit-align-self: ${state.flexItems[index].alignSelf};
\xa0\xa0\xa0\xa0-ms-flex-item-align: ${state.flexItems[index].alignSelf};\r\n`
: ''}\xa0\xa0\xa0\xa0align-self: ${state.flexItems[index].alignSelf};
}\r\n\r\n`
)
		}
	})

	allStyles.push(mainStyles, defaultItemStyles, itemStyles.join(''))

	return allStyles

};