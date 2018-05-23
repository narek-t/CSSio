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

export const transformGradientStyles = (gradients, angle, type, predestination, forClass) => {
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
		gradientCss = 'background: ' + mappedGradients[0].split(' ')[0] + ';\r\n' + (forClass ? '\xa0\xa0\xa0\xa0' : '' ) + 'background: ' + gradientCss + ';'
	}

	if (predestination === 'forTextGradientCode') {
		gradientCss = 'background: ' + mappedGradients[0].split(' ')[0] + ';\r\nbackground: ' + gradientCss + ';\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;'
	}

	return gradientCss

};

export const transformGradientAnimatorStyles = (gradients, angle, type, predestination, animationSettings) => {
	const gradientStyle = transformGradientStyles(gradients, angle, type, predestination, true);
	const animationStyles = transformKenBurnsStyles(animationSettings).animationStyles

	return `/**
 * ----------------------------------------
 * animation class
 * ----------------------------------------
 **/

.animated-gradient {
\xa0\xa0\xa0\xa0${gradientStyle}
\xa0\xa0\xa0\xa0background-size: 400% 400%;
\xa0\xa0\xa0\xa0/* You can change animation name from 'undefined' */
\xa0\xa0\xa0\xa0animation: ${animationStyles};
\xa0\xa0\xa0\xa0-webkit-animation: ${animationStyles};
}

/**
 * ----------------------------------------
 * animation styles. You can change
 * animation name from 'undefined'
 * ----------------------------------------
 **/

 @-webkit-keyframes undefined {
\xa0\xa0\xa0\xa00%{background-position:37% 0%}
\xa0\xa0\xa0\xa050%{background-position:64% 100%}
\xa0\xa0\xa0\xa0100%{background-position:37% 0%}
}
@keyframes undefined {
\xa0\xa0\xa0\xa00%{background-position:37% 0%}
\xa0\xa0\xa0\xa050%{background-position:64% 100%}
\xa0\xa0\xa0\xa0100%{background-position:37% 0%}
}`
}


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

export const transformColumnStyles = (state) => {
	return `-webkit-column-count: ${state.columnCount};
-moz-column-count: ${state.columnCount};
column-count: ${state.columnCount};
-webkit-column-gap: ${state.columnGap};
-moz-column-gap: ${state.columnGap};
column-gap: ${state.columnGap};
${state.columnRuleWidth !==0 ? 
`-webkit-column-rule: ${state.columnRuleWidth}px ${state.columnRuleStyle} ${state.columnRuleColor};
-moz-column-rule: ${state.columnRuleWidth}px ${state.columnRuleStyle} ${state.columnRuleColor};
column-rule: ${state.columnRuleWidth}px ${state.columnRuleStyle} ${state.columnRuleColor};` : ''
}`
}

export const transformTransformStyles = (state) => {
	return `${(state.transforms[0].value !== 1 || state.transforms[1].value !== 1 || state.transforms[2].value !== 1) ? `scale3d(${state.transforms[0].value}, ${state.transforms[1].value}, ${state.transforms[2].value})` : ''} ${state.transforms[3].value !== 0 ? `rotateX(${state.transforms[3].value}deg)` : ''} ${state.transforms[4].value !== 0 ? `rotateY(${state.transforms[4].value}deg)` : ''} ${state.transforms[5].value !== 0 ? `rotateZ(${state.transforms[5].value}deg)` : ''} ${(state.transforms[6].value !== 0 || state.transforms[7].value !== 0 || state.transforms[8].value !== 0) ? `translate3D(${state.transforms[6].value}px, ${state.transforms[7].value}px, ${state.transforms[8].value}px)` : ''} ${(state.transforms[9].value !== 0 || state.transforms[10].value !== 0) ? `skew(${state.transforms[9].value}deg, ${state.transforms[10].value}deg)` : ''}`
}

export const generateTransformStyles = (state) => {
	const showTransformStyles = transformTransformStyles(state).trim();

	const transformStyles = `transform: ${showTransformStyles};
-webkit-transform: ${showTransformStyles};
-moz-transform: ${showTransformStyles};
-o-transform; ${showTransformStyles};
-ms-transform: ${showTransformStyles};`

	const showPerspectiveStyles = state.transforms[11].value !==1000 || state.transforms[12].value !==50 || state.transforms[13].value !== 50;
	const perspectiveStyles = `-webkit-perspective: ${state.transforms[11].value}px;
perspective: ${state.transforms[11].value}px;
-webkit-perspective-origin: ${state.transforms[12].value}% ${state.transforms[13].value}%;
perspective-origin: ${state.transforms[12].value}% ${state.transforms[13].value}%;`

	return `${showTransformStyles ? transformStyles : ''}
	${showPerspectiveStyles ? perspectiveStyles : ''}`
}

export const changeObjectItem = (object, value, name) => {
	return {
		...object,
		[name]: value,
	}
}

export const transformKenBurnsStyles = (animationSettings) => {

	let animationCount
	if (animationSettings.iteration === 1 && !animationSettings.infinite) {
		animationCount = ''
	} else if (animationSettings.iteration !== 1 && !animationSettings.infinite) {
		animationCount = animationSettings.iteration
	} else if (animationSettings.infinite) {
		animationCount = 'infinite'
	}

	const animationStyles = `${animationSettings.kenBurnsType} ${animationSettings.duration}ms ${animationSettings.timingFunction}${animationSettings.delay !== 0 ? ' ' + animationSettings.delay+'ms' : ''}${animationCount ? ' ' + animationCount : ''}${animationSettings.direction !== 'normal' ? ' ' + animationSettings.direction: ''}${animationSettings.fillMode !== 'none' ? ' ' + animationSettings.fillMode: ''}`

	let animationKeyframes

	switch (animationSettings.kenBurnsType) {
		case 'kenburns-top' :
			animationKeyframes = `@-webkit-keyframes kenburns-top {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 50% 16%;
\xa0\xa0\xa0\xa0transform-origin: 50% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateY(-15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateY(-15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: top;
\xa0\xa0\xa0\xa0transform-origin: top;
\xa0\xa0}
}
@keyframes kenburns-top {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 50% 16%;
\xa0\xa0\xa0\xa0transform-origin: 50% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateY(-15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateY(-15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: top;
\xa0\xa0\xa0\xa0transform-origin: top;
\xa0\xa0}
}`
			break
		case 'kenburns-top-right' :
			animationKeyframes = `@-webkit-keyframes kenburns-top-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 16%;
\xa0\xa0\xa0\xa0transform-origin: 84% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(20px, -15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(20px, -15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right top;
\xa0\xa0\xa0\xa0transform-origin: right top;
\xa0\xa0}
}
@keyframes kenburns-top-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 16%;
\xa0\xa0\xa0\xa0transform-origin: 84% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(20px, -15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(20px, -15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right top;
\xa0\xa0\xa0\xa0transform-origin: right top;
\xa0\xa0}
}`
			break

		case 'kenburns-right' :
			animationKeyframes = `@-webkit-keyframes kenburns-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 50%;
\xa0\xa0\xa0\xa0transform-origin: 84% 50%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateX(20px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateX(20px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right;
\xa0\xa0\xa0\xa0transform-origin: right;
\xa0\xa0}
}
@keyframes kenburns-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 50%;
\xa0\xa0\xa0\xa0transform-origin: 84% 50%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateX(20px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateX(20px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right;
\xa0\xa0\xa0\xa0transform-origin: right;
\xa0\xa0}
}`
			break

		case 'kenburns-bottom-right' :
			animationKeyframes = `@-webkit-keyframes kenburns-bottom-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 84%;
\xa0\xa0\xa0\xa0transform-origin: 84% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(20px, 15px);
\xa0\xa0\xa0\xa0 transform: scale(1.25) translate(20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right bottom;
\xa0\xa0\xa0\xa0transform-origin: right bottom;
\xa0\xa0}
}
@keyframes kenburns-bottom-right {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 84% 84%;
\xa0\xa0\xa0\xa0transform-origin: 84% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(20px, 15px);
\xa0\xa0\xa0\xa0 transform: scale(1.25) translate(20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: right bottom;
\xa0\xa0\xa0\xa0transform-origin: right bottom;
\xa0\xa0}
}`
			break

		case 'kenburns-bottom' :
			animationKeyframes = `@-webkit-keyframes kenburns-bottom {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 50% 84%;
\xa0\xa0\xa0\xa0transform-origin: 50% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateY(15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateY(15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: bottom;
\xa0\xa0\xa0\xa0transform-origin: bottom;
\xa0\xa0}
}
@keyframes kenburns-bottom {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0transform: scale(1) translateY(0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 50% 84%;
\xa0\xa0\xa0\xa0transform-origin: 50% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translateY(15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translateY(15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: bottom;
\xa0\xa0\xa0\xa0transform-origin: bottom;
\xa0\xa0}
}`
			break

		case 'kenburns-bottom-left' :
			animationKeyframes = `@-webkit-keyframes kenburns-bottom-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 84%;
\xa0\xa0\xa0\xa0transform-origin: 16% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: left bottom;
\xa0\xa0\xa0\xa0transform-origin: left bottom;
\xa0\xa0}
}
@keyframes kenburns-bottom-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 84%;
\xa0\xa0\xa0\xa0transform-origin: 16% 84%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: left bottom;
\xa0\xa0\xa0\xa0transform-origin: left bottom;
\xa0\xa0}
}`
			break

		case 'kenburns-left' :
			animationKeyframes = `@-webkit-keyframes kenburns-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 50%;
\xa0\xa0\xa0\xa0transform-origin: 16% 50%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: left;
\xa0\xa0\xa0\xa0transform-origin: left;
\xa0\xa0}
}
@keyframes kenburns-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 50%;
\xa0\xa0\xa0\xa0transform-origin: 16% 50%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, 15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: left;
\xa0\xa0\xa0\xa0transform-origin: left;
\xa0\xa0}
}`
			break
		default :
			animationKeyframes = `@-webkit-keyframes kenburns-top-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0 -webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 16%;
\xa0\xa0\xa0\xa0transform-origin: 16% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, -15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, -15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: top left;
\xa0\xa0\xa0\xa0transform-origin: top left;
\xa0\xa0}
}
@keyframes kenburns-top-left {
\xa0\xa00% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0transform: scale(1) translate(0, 0);
\xa0\xa0\xa0\xa0-webkit-transform-origin: 16% 16%;
\xa0\xa0\xa0\xa0transform-origin: 16% 16%;
\xa0\xa0}
\xa0\xa0100% {
\xa0\xa0\xa0\xa0-webkit-transform: scale(1.25) translate(-20px, -15px);
\xa0\xa0\xa0\xa0transform: scale(1.25) translate(-20px, -15px);
\xa0\xa0\xa0\xa0-webkit-transform-origin: top left;
\xa0\xa0\xa0\xa0transform-origin: top left;
\xa0\xa0}
}`
	}



	return {
		animationStyles,
		animationKeyframes
	}
}

export const transformKenBurnsStylesForCode = (animationSettings) => {
	const animationStyles = transformKenBurnsStyles(animationSettings).animationStyles
	const animationKeyframes = transformKenBurnsStyles(animationSettings).animationKeyframes

	return `/**
 * ----------------------------------------
 * animation class
 * ----------------------------------------
 **/

.${animationSettings.kenBurnsType} {
\xa0\xa0\xa0\xa0-webkit-animation: ${animationStyles};
\xa0\xa0\xa0\xa0animation: ${animationStyles};
}

/**
 * ----------------------------------------
 * animation ${animationSettings.kenBurnsType}
 * ----------------------------------------
 **/

${animationKeyframes}`



}