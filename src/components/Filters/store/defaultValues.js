const defaultValues = {
	filters: [
		{
			name: 'blur',
			value: 0,
			defaultValue: 0,
			units: 'px',
			minValue: 0,
			maxValue: 50,
			step: 1,
		},
		{
			name: 'grayscale',
			value: 0,
			defaultValue: 0,
			units: '%',
			minValue: 0,
			maxValue: 100,
			step: 1
		},
		{
			name: 'sepia',
			value: 0,
			defaultValue: 0,
			units: '%',
			minValue: 0,
			maxValue: 100,
			step: 1
		},
		{
			name: 'brightness',
			value: 100,
			defaultValue: 100,
			units: '%',
			minValue: 0,
			maxValue: 200,
			step: 1
		},
		{
			name: 'contrast',
			value: 100,
			defaultValue: 100,
			units: '%',
			minValue: 0,
			maxValue: 200,
			step: 1
		},
		{
			name: 'hue-rotate',
			value: 0,
			defaultValue: 0,
			units: 'deg',
			minValue: 0,
			maxValue: 360,
			step: 10
		},
		{
			name: 'invert',
			value: 0,
			defaultValue: 0,
			units: '%',
			minValue: 0,
			maxValue: 100,
			step: 1
		},
		{
			name: 'saturate',
			value: 100,
			defaultValue: 100,
			units: '%',
			minValue: 0,
			maxValue: 200,
			step: 1
		},
		{
			name: 'opacity',
			value: 100,
			defaultValue: 100,
			units: '%',
			minValue: 0,
			maxValue: 100,
			step: 1
		},
	],
	stylesArray: [],
	imageUrl: '',
}

export default defaultValues