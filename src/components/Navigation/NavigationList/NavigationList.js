import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationList.css'

const navigationList = (props) => {
	return (
		<ul className="menu">

			<NavigationItem link={`${process.env.PUBLIC_URL}/`}
							subMenu={[
									{link: `${process.env.PUBLIC_URL}/box-shadow`, text: 'Box shadow'},
									{link: `${process.env.PUBLIC_URL}/text-shadow`, text: 'Text shadow'}
								]}
							isClickable={false}>
				Shadows
			</NavigationItem>

			<NavigationItem link={`${process.env.PUBLIC_URL}/`}
							subMenu={[
								{link: `${process.env.PUBLIC_URL}/filters`, text: 'Filters'},
								{link: `${process.env.PUBLIC_URL}/image-to-base64`, text: 'Image to Base64'},
							]}
							isClickable={false}>
				Images
			</NavigationItem>

			<NavigationItem link={`${process.env.PUBLIC_URL}/`}
							subMenu={[
									{link: `${process.env.PUBLIC_URL}/gradient`, text: 'Box gradient'},
									{link: `${process.env.PUBLIC_URL}/text-gradient`, text: 'Text gradient'}
								]}
							isClickable={false}>
				Gradients
			</NavigationItem>
			<NavigationItem link={`${process.env.PUBLIC_URL}/`}
							subMenu={[
									{link: `${process.env.PUBLIC_URL}/flexbox`, text: 'Flexbox'},
									{link: `${process.env.PUBLIC_URL}/columns`, text: 'CSS Columns'}
								]}
							isClickable={false}>
				Layouts
			</NavigationItem>
			<NavigationItem link={`${process.env.PUBLIC_URL}/`}
							subMenu={[
								{link: `${process.env.PUBLIC_URL}/gradient-animator`, text: 'Gradient animator'},
								{link: `${process.env.PUBLIC_URL}/ken-burns`, text: 'Ken Burns'}
							]}
							isClickable={false}>
				Animations
			</NavigationItem>
			<NavigationItem link={`${process.env.PUBLIC_URL}/transform`} isClickable={true}>Transforms</NavigationItem>
			{/*<NavigationItem link="/" isClickable={true}>Transitions</NavigationItem>*/}
			{/*<NavigationItem link="/" isClickable={true}>Animations</NavigationItem>*/}

			{/*<NavigationItem link="/" isClickable={true}>Borders</NavigationItem>*/}

		</ul>
	)
}

export default navigationList