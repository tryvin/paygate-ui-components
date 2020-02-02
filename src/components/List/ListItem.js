import React from 'react';

import styled from 'styled-components';

import ListItemIcon from './ListItem/Icon';
import ListItemTime from './ListItem/Time';
import ListItemContent from './ListItem/Content';
import ListItemActions from './ListItem/Actions';

const ListItemBase = styled.div`
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #fff;
	padding: 15px;
	box-sizing: border-box;
	min-height: 85px;

	width: ${props => (props.actions ? `calc(100% - ${props.actions.length * 35 + 5}px)` : '100%')};
	float: left;
`;

const ListItem = ({ style, iconColor, icon, title, text, time, actions }) => (
	<div style={style}>
		<ListItemBase actions={actions}>
			{icon ? <ListItemIcon iconColor={iconColor} icon={icon} /> : null}

			{time ? <ListItemTime>{time}</ListItemTime> : null}

			<ListItemContent title={title} text={text} />
		</ListItemBase>

		{actions ? <ListItemActions actions={actions} /> : null}
	</div>
);
export default ListItem;
