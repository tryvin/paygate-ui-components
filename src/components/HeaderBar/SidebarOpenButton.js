import React from 'react';

import styled from 'styled-components';
import Icon from '../Icon';

const SidebarOpenButtonBase = ({ onClick, className }) => (
	<button onClick={onClick} className={className}>
		<Icon icon={'bars'} />
	</button>
);

export default styled(SidebarOpenButtonBase)`
	background: transparent;
	border: 0px;
	color: white;
	font-size: 18px;
	margin-right: 10px;
`;
