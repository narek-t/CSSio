import React from 'react'
import image from '../../../../assets/images/ken.jpg'
import * as Util from '../../../../globals/Util'
import './KenBurnsPreview.css'

const kenBurnsPreview = (props) => {
	return (
		<div className="kenburns-preview">
			<div className="kenburns-preview__inner">
				<div className="kenburns-preview__inner-img" key={Math.random()} data-key={props.refresh} style={{
					backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : `url(${image})`,
					animation: Util.transformKenBurnsStyles(props.animationSettings).animationStyles
				}} />
			</div>
			<span className="text-shadow-note">
					<span>Your images will not be saved anywhere</span>
				</span>
		</div>
	)
}

export default kenBurnsPreview