import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import { linearGradient } from '../Styled';

const ButtonBase = styled.button.attrs(props => ({
	className: `${props.padded ? 'padded' : ''}`,
}))`
	border-radius: 4px;
	background: #ececec;
	background-size: 100%;
	${linearGradient('#fafafa', '#ececec')}
	border: 1px solid #d5d5d5;
	box-shadow: 0 0 0 1px #fafafa inset, 0 1px 1px 0 #dddddd;
	padding: 10px 0;
	font-weight: 700;
	white-space: nowrap;
	color: #626262;
	box-sizing: border-box;
	text-decoration: none;
	text-align: center;
	position: relative;

	&.padded {
		margin-bottom: 10px;
	}

	&:hover {
		background: #f2f2f2;
		${linearGradient('#f7f7f7', '#f2f2f2')}
	}

	& > svg {
		font-size: 32px;
		margin: 0 auto;
	}

	& > svg {
		display: block;
		padding-top: 4px;
		font-weight: 600;
	}
`;

const TriangleButtonIconBase = styled.span.attrs(props => ({
	className: props.color,
}))`
	position: absolute;
	text-align: center;
	font-size: 12px;
	font-weight: 600;
	line-height: 16px;
	top: 0;
	right: 0;
	color: #fff;
	overflow: hidden;
	height: 32px;
	width: 32px;
	text-shadow: none;
	border-top-right-radius: 3px;
	pointer-events: none;
	z-index: 0;

	&.red:before {
		border-right-color: #aa433a;
	}

	&.green:before {
		border-right-color: #8fae53;
	}

	&.blue:before {
		border-right-color: #7fb3d4;
	}

	&.orange:before {
		border-right-color: #cf6e20;
	}

	&:before {
		z-index: -1;
		content: '';
		display: inline-block;
		border-right: 32px solid;
		border-right-color: #d5d5d5;
		border-bottom: 32px solid transparent;
		position: absolute;
		top: 0;
		right: 0;
	}

	& > svg {
		position: absolute;
		top: 4px;
		right: 4px;
	}
`;

export const TriangleButtonIcon = ({ color, icon }) => (
	<TriangleButtonIconBase color={color}>
		<Icon icon={icon} />
	</TriangleButtonIconBase>
);

const Button = ({ icon, title, triangleIcon, triangleColor, ...props }) => (
	<ButtonBase {...props} title={title}>
		{icon && <Icon icon={icon} />}
		<span>{title}</span>

		{triangleIcon ? <TriangleButtonIcon color={triangleColor} icon={triangleIcon} /> : null}
	</ButtonBase>
);
export default Button;

export const ButtonLink = props => <Button {...props} as={Link} />;
