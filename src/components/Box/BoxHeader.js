import React from 'react';

import styled from 'styled-components';

import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { linearGradient, tabledBeforeAndAfter } from '../Styled';

const BoxHeaderBase = styled.div`
	border-top-right-radius: 3px;
	border-top-left-radius: 3px;
	background: #eaeaea;
	background-size: 100%;
	text-shadow: 0 1px white;
	border-bottom: 1px solid #cdcdcd;
	color: #636363;
	font-weight: 600;

	${linearGradient('#fdfdfd', '#eaeaea')}
	${tabledBeforeAndAfter}

    & a {
		color: #78808a;
		text-decoration: none;

		&:hover {
			color: #5a6573;
		}
	}

	& button {
		background: transparent;
		color: #78808a;
		padding: 0;
		border: 0;

		&:hover {
			color: #5a6573;
		}
	}

	& > span {
		display: block;
		padding: 10px;
		font-size: 12px;
		font-weight: 600;

		&.left {
			float: left;
		}

		&.right {
			float: right;
		}

		& svg {
			margin-right: 5px;
		}
	}
`;

const BoxHeader = ({ title, icon, actions, renderRight }) => (
	<BoxHeaderBase>
		<span className={'left'}>
			{icon && <Icon icon={icon} />}
			{title}
		</span>

		{actions ? (
			<span className={'right'}>
				{actions.map(({ icon, title, link, callback }) => {
					if (link) {
						return (
							<Link to={link} title={title}>
								<Icon icon={icon} />
							</Link>
						);
					} else {
						return (
							<button onClick={callback} title={title}>
								<Icon icon={icon} />
							</button>
						);
					}
				})}
			</span>
		) : null}

		{renderRight ? renderRight() : null}
	</BoxHeaderBase>
);

export default BoxHeader;
