import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const Button = ({ icon, title, ...props }) => (
	<ButtonBase {...props} title={title}>
		{icon && <FontAwesomeIcon icon={icon} />}
		<span>{title}</span>
	</ButtonBase>
);
export default Button;

export const ButtonLink = props => <Button {...props} as={Link} />;
