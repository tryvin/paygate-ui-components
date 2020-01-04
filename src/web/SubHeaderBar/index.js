import styled from 'styled-components';

import { linearGradient, tabledBeforeAndAfter } from '../Styled';

export default styled.div`
	background: #ececec;
	background-size: 100%;
	background-image: ${linearGradient('#fafafa', '#ececec')};
	box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.07);
	border-bottom: 1px solid #ccc;
	position: relative;
	width: 100%;
	padding: 10px 15px;
	box-sizing: border-box;
	margin-bottom: 15px;

	${tabledBeforeAndAfter}

	& > div {
		vertical-align: middle;
		text-shadow: 0 1px #fff;
	}
`;

export { default as SubHeaderBarContent } from './SubHeaderBarContent';
