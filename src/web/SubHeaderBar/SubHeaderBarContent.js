import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = styled.h3`
	line-height: 35px;
	margin: 0;
	font-weight: 300;
	color: #888;
	font-size: 24.5px;
	& > svg {
		margin-right: 10px;
	}
`;

const SubTitle = styled.h5`
	color: #aaa;
	margin: 0;
	font-weight: 300;
	font-size: 14px;
`;

export default ({ title, icon, subtitle }) => (
	<div>
		<Title>
			{icon && <FontAwesomeIcon icon={icon} />}
			{title}
		</Title>

		<SubTitle>{subtitle}</SubTitle>
	</div>
);
