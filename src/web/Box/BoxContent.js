import styled from 'styled-components';

export default styled.div.attrs(props => ({
	className: `${props.padded ? 'padded' : ''}`,
}))`
	&.padded {
		padding: 15px;
	}
`;
