import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarOpenButtonBase = ({ onClick, className }) => (
	<button onClick={onClick} className={className}>
		<FontAwesomeIcon icon={'bars'} />
	</button>
);

export default styled(SidebarOpenButtonBase)`
	background: transparent;
	border: 0px;
	color: white;
	font-size: 18px;
	margin-right: 10px;
`;
