import React from 'react'
import './FlexboxSinglePreview.css'

const flexboxSinglePreview = (props) => {
	return (
		<div className="flex-single" style={{
			margin: props.margin,
			order: props.item.order,
			flexGrow: props.item.flexGrow,
			flexShrink: props.item.flexShrink,
			flexBasis: props.item.flexBasis,
			alignSelf: props.item.alignSelf,
		}}>
			<span className="flex-item-number">{props.index+1}</span>
			<div className="flex-item__text" contentEditable={true} suppressContentEditableWarning>
				Editable text
			</div>
		</div>
	)
}

export default flexboxSinglePreview