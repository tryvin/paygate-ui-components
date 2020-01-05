import styled from 'styled-components';
export { Container as GridContainer, Row, Col } from 'react-awesome-styled-grid';

const PaddedView = styled.div`
	margin-bottom: ${props => (props.size ? `${props.size}px` : '15px')};
`;

export { PaddedView };
