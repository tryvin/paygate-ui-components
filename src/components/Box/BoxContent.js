import styled from 'styled-components';

export default styled.div.attrs(props => ({
	className: `${props.padded ? 'padded' : ''} ${props.centered ? 'centered' : ''}`,
}))`
	&.padded {
		padding: 15px;
	}

	&.centered {
		justify-content: center;
		align-items: center;
		display: flex;
	}
`;
