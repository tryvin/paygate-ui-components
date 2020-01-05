import React from 'react';
import styled from 'styled-components';

import { GlyphIcon } from '../Icon';

const StatsViewBase = styled.div.attrs(props => ({
	className: `${props.small ? 'small' : ''}`,
}))`
	&.small ul li.count {
		font-size: 16px;
		line-height: 16px;
		height: 16px;
	}

	& ul {
		margin-left: 0;
		margin-bottom: 10px;
		list-style: none;

		& li {
			vertical-align: middle;
			display: inline-block;
			padding-left: 5px;
			padding-right: 5px;
			text-overflow: ellipsis;
			overflow: hidden;

			&.count {
				font-size: 32px;
				line-height: 32px;
				height: 32px;
			}
		}
	}

	& .stats-label {
		color: #999999;
		font-weight: 600;
		text-transform: uppercase;
		margin-top: 5px;
		padding-right: 5px;
		padding-left: 5px;
	}
`;

export default ({ small, title, icon, value }) => (
	<StatsViewBase small={small}>
		<ul>
			<li className={'glyph'}>
				<GlyphIcon icon={icon} iconSize={small ? 15 : null} size={small ? 25 : null} />
			</li>
			<li className={'count'}>{value}</li>
		</ul>
		<div className={'stats-label'}>{title}</div>
	</StatsViewBase>
);
