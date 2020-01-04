import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuToggleButtonContainer = ({ className, image, title, icon, linkTo, onClick }) => (
	<Link className={className} to={linkTo} onClick={onClick}>
		<span>
			{image && <img src={image} alt={title} />}

			{icon && <FontAwesomeIcon icon={icon} />}

			<span>{title}</span>

			{!linkTo && <FontAwesomeIcon icon={'caret-down'} />}
		</span>
	</Link>
);

export default styled(MenuToggleButtonContainer).attrs(props => ({
	className: `${props.isOpen ? 'isOpen' : ''} ${props.isSidebar ? 'isSidebar' : 'noSidebar'}`,
}))`
    height: 40px;
    background: 'transparent';
    color: #999999;

    &.isOpen {
        background: #111;
        color: white;
    }

    line-height: 40px;
    text-decoration: none;
    padding: 3px 10px;
    box-shadow: none;
    border-radius: 0;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    float: none;
    display: block;
    cursor: pointer;
    border: 0;

    &:hover {
        background: #111111;
        color: white;
    }

    & > span {
        display: flex;
        height: 40px;
        align-items: center;

        position: relative;
        font-weight: 400;
        & > svg {
            margin-right: 5px;
        }
        & > img {
            width: 32px;
            height: 32px;
            box-shadow: 0 1px 3px #1e1e1e;
            border-radius: 2px;
            margin-right: 10px;
            object-fit: contain;
        }
    }

    & svg {
        margin-left: 5px;
    }

    &.isSidebar {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        margin-bottom: 1px;
        padding: 0px 10px 1px 10px;

        & svg:first-child {
            width: 2em !important;
            height: 2em !important;
        }

        &:hover {
            &:before {
                background: #4291A6;
            }
        }

        &:before {
            content: '';
            background: #1F2B42
            box-shadow: 0 0 2px 1px #7bc8d7 inset;
            height: 42px;
            margin-left: -10px;
            width: 5px;
            position: absolute;
        }
    }
`;
