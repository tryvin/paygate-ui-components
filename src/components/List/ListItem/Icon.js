import React from 'react';

import styled from 'styled-components';
import Icon from '../../Icon';

const ListItemIconBase = styled.div`
	float: left;
	height: 36px;
	width: 36px;
	line-height: 36px;
	text-align: center;
	vertical-align: middle;
	box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
	border-radius: 50%;
	font-size: 22px;
	color: white;

	&.blue {
		background: #7fb3d4;
		background-size: 100%;
		background-image: -webkit-gradient(
			linear,
			50% 0,
			50% 100%,
			color-stop(0%, #a5cae1),
			color-stop(100%, #7fb3d4)
		);
		background-image: -webkit-linear-gradient(top, #a5cae1, #7fb3d4);
		background-image: -moz-linear-gradient(top, #a5cae1, #7fb3d4);
		background-image: -o-linear-gradient(top, #a5cae1, #7fb3d4);
		background-image: linear-gradient(top, #a5cae1, #7fb3d4);
		border: 1px solid #60a1ca;
	}

	&.green {
		background: #8cc079;
		background-size: 100%;
		background-image: -webkit-gradient(
			linear,
			50% 0,
			50% 100%,
			color-stop(0%, #aad09c),
			color-stop(100%, #8cc079)
		);
		background-image: -webkit-linear-gradient(top, #aad09c, #8cc079);
		background-image: -moz-linear-gradient(top, #aad09c, #8cc079);
		background-image: -o-linear-gradient(top, #aad09c, #8cc079);
		background-image: linear-gradient(top, #aad09c, #8cc079);
		border: 1px solid #74b35d;
	}

	&.cyan {
		background: #81babd;
		background-size: 100%;
		background-image: -webkit-gradient(
			linear,
			50% 0,
			50% 100%,
			color-stop(0%, #a2cccf),
			color-stop(100%, #81babd)
		);
		background-image: -webkit-linear-gradient(top, #a2cccf, #81babd);
		background-image: -moz-linear-gradient(top, #a2cccf, #81babd);
		background-image: -o-linear-gradient(top, #a2cccf, #81babd);
		background-image: linear-gradient(top, #a2cccf, #81babd);
		border: 1px solid #66abaf;
	}

	&.purple {
		background: #aea7cf;
		background-size: 100%;
		background-image: -webkit-gradient(
			linear,
			50% 0,
			50% 100%,
			color-stop(0%, #ccc8e1),
			color-stop(100%, #aea7cf)
		);
		background-image: -webkit-linear-gradient(top, #ccc8e1, #aea7cf);
		background-image: -moz-linear-gradient(top, #ccc8e1, #aea7cf);
		background-image: -o-linear-gradient(top, #ccc8e1, #aea7cf);
		background-image: linear-gradient(top, #ccc8e1, #aea7cf);
		border: 1px solid #968dc1;
	}
`;

const ListItemIcon = ({ iconColor, icon }) => (
	<ListItemIconBase className={iconColor}>
		<Icon icon={icon} />
	</ListItemIconBase>
);

export default ListItemIcon;
