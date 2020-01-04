import styled from 'styled-components';

import { linearGradient } from '../Styled';

export const Nav = styled.div`
	position: relative;
	left: 0;
	display: block;
`;

export const NavColumn = styled(Nav)`
	justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
	margin-left: 10px;
	flex: ${props => (props.size ? props.size : 1)};
	display: flex;
`;

export const Navbar = styled.div`
	margin-bottom: 0;
	overflow: visible;
`;

export const NavbarInner = styled.div`
	border-radius: 0;

	border: 1px solid rgba(10, 13, 14, 0.8);
	border-left: 0;
	border-right: 0;

	${props => linearGradient(props.theme.gradientStartColor, props.theme.gradientEndColor)}

	min-height: 40px;
	padding: 0 20px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

	display: flex;
	flex-direction: row;
`;

NavbarInner.defaultProps = {
	theme: {
		gradientStartColor: '#1b2329',
		gradientEndColor: '#11161a',
	},
};
