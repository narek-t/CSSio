import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationList.css'

const navigationList = (props) => {
	return (
		<ul className="menu">

			<NavigationItem link="/"
							subMenu={[
									{link: '/box-shadow', text: 'Box shadow'},
									{link: '/text-shadow', text: 'Text shadow'}
								]}
							isClickable={false}>
				Shadows
			</NavigationItem>

			<NavigationItem link="/"
							subMenu={[
								{link: '/filters', text: 'Filters'},
								{link: '/image-to-base64', text: 'Image to Base64'},
							]}
							isClickable={false}>
				Images
			</NavigationItem>

			<NavigationItem link="/"
							subMenu={[
									{link: '/gradient', text: 'Box gradient'},
									{link: '/text-gradient', text: 'Text gradient'}
								]}
							isClickable={false}>
				Gradients
			</NavigationItem>
			<NavigationItem link="/"
							subMenu={[
									{link: '/flexbox', text: 'Flexbox'},
									{link: '#', text: 'CSS Grids'},
									{link: '/columns', text: 'CSS Columns'}
								]}
							isClickable={false}>
				Layouts
			</NavigationItem>
			<NavigationItem link="/" isClickable={true}>Transitions</NavigationItem>
			<NavigationItem link="/" isClickable={true}>Animations</NavigationItem>
			<NavigationItem link="/" isClickable={true}>Transforms</NavigationItem>
			<NavigationItem link="/" isClickable={true}>Borders</NavigationItem>

		</ul>
	)
}

export default navigationList