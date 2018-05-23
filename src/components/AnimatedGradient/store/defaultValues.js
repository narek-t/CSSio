const defaultValues = {
	gradients: [
		{
			color: '#9841c4',
			positionPx: 0,
			positionPercentage: 0,
			id: 'id1'
		},
		{
			color: '#416fc6',
			positionPx: 549,
			positionPercentage: 49,
			id: 'id2'
		},
		{
			color: '#59dee9',
			positionPx: 1116,
			positionPercentage: 100,
			id: 'id3'
		}
	],
	type: 'linear',
	angle: 90,
	refresh: 0,
	animationSettings: {
		duration: 20000,
		timingFunction: 'ease-in-out',
		delay: 0,
		iteration: 1,
		infinite: true,
		direction: 'normal',
		fillMode: 'both',
	}
}

export default defaultValues