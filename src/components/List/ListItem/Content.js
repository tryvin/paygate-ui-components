import React from 'react';

import styled from 'styled-components';

const ListItemContentBase = styled.div`
	margin-left: 55px;
	margin-right: 50px;

	& .title {
		color: #636364;
		font-weight: 600;
		text-shadow: 0 1px rgba(255, 255, 255, 0.5);
		font-size: 16px;
		padding-bottom: 5px;
	}
`;

const ListItemContent = ({ title, text }) => (
	<ListItemContentBase>
		<div className="title">{title}</div>
		<div className="text">{text}</div>
	</ListItemContentBase>
);

export default ListItemContent;
