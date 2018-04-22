import React from 'react';
import { NavLink } from 'react-router-dom';
import Aux from '../../../../hoc/Aux/Aux'

const navigationItem = ( props ) => (
	<li className="menu__item">
		<Aux>
			{ props.isClickable ?
					<NavLink
						to={props.link}
						exact={props.exact || false}
						activeClassName="menu__item__link active"
						className="menu__item__link">{props.children}</NavLink> :
					<span className="menu__item__link" style={{cursor: 's-resize'}}>
						{props.children}
					</span> }
			{ props.subMenu && props.subMenu.length ?
				( <ul className="sub-menu">
						{
							props.subMenu.map((subMenuItem, index) => {
								return (
									<li className="sub-menu__item" key={index}>
										<NavLink
											to={subMenuItem.link}
											exact={subMenuItem.exact || false}
											activeClassName="sub-menu__link active"
											className="sub-menu__link">{subMenuItem.text}</NavLink>
									</li>
								)
							})
						}
					</ul>
				) : null }
		</Aux>
	</li>
);

export default navigationItem;