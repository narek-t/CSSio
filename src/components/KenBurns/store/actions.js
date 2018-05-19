export const RESET_KEN_BURNS = 'KENBURNS_CONTAINER_RESET_KEN_BURNS'
export const resetKenBurnState = () => ({
	type: RESET_KEN_BURNS,
	payload: {},
})

export const CHANGE_IMAGE = 'KENBURNS_CONTAINER_CHANGE_IMAGE'
export const changeImage = (url) => ({
	type: CHANGE_IMAGE,
	payload: {url},
})

export const ANIMATION_SETTINGS_CHANGE = 'KENBURNS_CONTAINER_ANIMATION_SETTINGS_CHANGE'
export const animationSettingsChange = (value, name) => ({
	type: ANIMATION_SETTINGS_CHANGE,
	payload: {value, name},
})

export const REFRESH = 'KENBURNS_CONTAINER_REFRESH'
export const refresh = () => ({
	type: REFRESH,
	payload: {},
})