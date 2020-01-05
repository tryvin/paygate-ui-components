import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GlyphIconBase = styled.div`
	color: white;
	padding: 0;
	background: #86b6da;
	border-radius: 4px;
	border: 1px solid #5f9fce;
	height: ${props => (props.size ? `${props.size}px` : '32px')};
	width: ${props => (props.size ? `${props.size}px` : '32px')};
	font-size: ${props => (props.iconSize ? `${props.iconSize}px` : '20px')};
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GlyphIcon = ({ icon, size, iconSize }) => (
	<GlyphIconBase size={size} iconSize={iconSize}>
		<FontAwesomeIcon icon={icon} />
	</GlyphIconBase>
);

export { GlyphIcon };

export default ({ icon }) => <FontAwesomeIcon icon={icon} />;
