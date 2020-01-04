import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { linearGradient } from '../Styled';

const DropdownItem = ({ className, linkTo, title, icon }) => (
	<li className={className}>
		<Link to={linkTo}>
			{icon && <FontAwesomeIcon icon={icon} />}
			<span>{title}</span>
		</Link>
	</li>
);

export default styled(DropdownItem).attrs(props => ({
	className: `${props.isSidebar ? 'isSidebar' : 'noSidebar'}`,
}))`
	line-height: 20px;
	& > a {
		font-size: 12px;
		display: block;
		padding: 3px 20px;
		clear: both;
		line-height: 20px;
		white-space: nowrap;
		text-decoration: none;

		& > span {
			position: relative;
		}

		& > svg {
			margin-right: 5px;
		}
	}

	&.noSidebar > a {
		text-shadow: 0 1px white;
		color: #404040;
		&:hover,
		&:focus {
			background: #f2f2f2;
			color: #404040;
		}
		font-weight: 600;
	}

	&.isSidebar > a {
		color: white;
		text-shadow: 0 1px #404040;

		&:hover,
		&:focus {
			background: ${linearGradient('rgba(90,90,90,0.2)', 'rgba(50,50,50,0.1)')};
			color: white;
		}
		font-weight: 400;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}
`;
