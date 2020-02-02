import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';

const ListItemActionsBase = styled.div`
	height: 100%;
	padding-left: 5px;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #fff;
	box-sizing: border-box;
	width: ${props => (props.actions ? `${props.actions.length * 35 + 5}px` : '40px')};
	float: right;

	align-items: center;
	justify-content: center;
	display: flex;

	& a {
		text-decoration: none;
		margin-right: 5px;
	}

	& button {
		background: transparent;
		padding: 0;
		border: 0;
		margin-right: 5px;
	}
`;

const ListActionItemBase = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 15px;

	align-items: center;
	justify-content: center;
	display: flex;

	background-color: ${props => props.color || 'red'};
	color: ${props => props.textColor || 'white'};
	font-size: 16px;
`;

const ListItemActions = ({ actions }) => (
	<ListItemActionsBase actions={actions}>
		{actions.map(({ icon, title, link, callback, color, textColor }) => {
			if (link) {
				return (
					<Link to={link} title={title}>
						<ListActionItemBase color={color} textColor={textColor}>
							<Icon icon={icon} />
						</ListActionItemBase>
					</Link>
				);
			} else {
				return (
					<button onClick={callback} title={title}>
						<ListActionItemBase color={color} textColor={textColor}>
							<Icon icon={icon} />
						</ListActionItemBase>
					</button>
				);
			}
		})}
	</ListItemActionsBase>
);

export default ListItemActions;
