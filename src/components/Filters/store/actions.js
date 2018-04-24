export const CHANGE_RANGE = 'FILTERS_CONTAINER_CHANGE_RANGE'
export const changeRange = (value, index, type) => ({
	type: CHANGE_RANGE,
	payload: {value, index, type},
})

export const RESET_FILTERS = 'FILTERS_CONTAINER_RESET_FILTERS'
export const resetFilters = () => ({
	type: RESET_FILTERS,
	payload: {},
})

export const CHANGE_IMAGE = 'FILTERS_CONTAINER_CHANGE_IMAGE'
export const changeImage = (url) => ({
	type: CHANGE_IMAGE,
	payload: {url},
})