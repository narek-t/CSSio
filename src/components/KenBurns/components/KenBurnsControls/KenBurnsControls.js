import React from 'react'
import AnimationPopup from '../../../AnimationPopup/AnimationPopup'
import SelectBox from '../../../SelectBox/SelectBox'

import './KenBurnsControls.css'

const kenBurnsControls = (props) => {
	return (
		<div className="box-shadow__controls ken-burns__controls">
			<div className="kenburns-type-select">
				<span className="kenburns-type-select-title">Preset: </span>
				<SelectBox
					options={['kenburns-top', 'kenburns-top-right', 'kenburns-right', 'kenburns-bottom-right', 'kenburns-bottom', 'kenburns-bottom-left', 'kenburns-left', 'kenburns-top-left']}
					onSelectChange={(event) => props.onAnimationSettingsChange(event.target.value, 'kenBurnsType')}
					value={props.animationSettings.kenBurnsType}/>
			</div>

			<AnimationPopup
				duration={props.animationSettings.duration}
				timingFunction={props.animationSettings.timingFunction}
				delay={props.animationSettings.delay}
				iteration={props.animationSettings.iteration}
				infinite={props.animationSettings.infinite}
				direction={props.animationSettings.direction}
				fillMode={props.animationSettings.fillMode}

				onAnimationSettingsChange={(value, name) => props.onAnimationSettingsChange(value, name)}
			/>

			<label className="file__input-label button is-primary add-button">
				Upload your image
				<input className="file__input"
					   type="file"
					   onChange={(e)=>props.onImageChange(e)} />
			</label>

			<span onClick={props.refresh} className="animation-reload animation-settings__title">Reload animation</span>

			<button className="reset-box box-shadow__reset"
					onClick={props.resetKenBurnsHandler}>Reset
			</button>
		</div>
	)
}

export default kenBurnsControls