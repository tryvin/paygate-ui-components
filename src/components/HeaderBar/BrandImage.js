import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BrandImageLink = styled(Link)`
	padding: 3px 20px 3px;
	width: 109px;
	height: 40px;
	display: block;
`;

export const BrandImageAnchor = styled.div`
	height: 40px;
`;

export default styled.img`
	max-height: 42px;
	margin-left: ${props => (props.sidebar ? '0px' : '-20px')};
	width: 109px;
	height: 40px;
`;
