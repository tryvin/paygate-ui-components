import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { linearGradient } from '../Styled';

export const DropdownMenu = styled.ul`
    ${props => ! props.isSidebar ? `
        position: absolute;
        top: 100%;
        z-index: 10000;
        float: left;
        background: whitesmoke;
        ${linearGradient('#fdfdfd', '#f5f5f5')}
        box-shadow: 0 1px 2px #dadada;

        &:before {
            left: ${props => props.left ? '12px' : 'auto'};
            right: ${props => ! props.left ? '12px' : 'auto'};
            content: '';
            display: inline-block;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #ccc;
            border-bottom-color: whitesmoke;
            position: absolute;
            top: -7px;
        }
    ` : ''}

    display: ${props => props.isOpen ? 'block' : 'none'};

    min-width: 160px;
    padding: 5px 0;
    margin: 4px 0 0;
    list-style: none;
    border-radius: 6px;
    border: 1px solid rgba(0,0,0,0.2);

    background-size: 100%;
`

const DropdownItem = ({className, linkTo, title, icon}) => (
    <li className={className}>
        <Link to={linkTo}>
            {icon && (<FontAwesomeIcon icon={icon} />)}
            <span>{title}</span>
        </Link>
    </li>
);

export const DropdownMenuItem = styled(DropdownItem)`
    line-height: 20px;
    & > a {
        ${props => ! props.isSidebar ? `
            text-shadow: 0 1px white;
            color: #404040;
            &:hover, &:focus {
                background: #f2f2f2;
                color: #404040;
            }
            font-weight: 600;
        ` : `
            color: white;
            text-shadow: 0 1px #404040;

            &:hover, &:focus {
                background: ${linearGradient('rgba(90,90,90,0.2)', 'rgba(50,50,50,0.1)')};
                color: white;
            }
            font-weight: 400;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        `}

        font-size: 12px;
        display: block;
        padding: 3px 20px;
        clear: both;
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;

        & > span {
            position: relative;
        }

        & > svg {
            margin-right: 5px;
        }
    }
`;

const MenuToggleButtonContainer = ({className, image, title, icon, linkTo, onClick}) => (
    <Link className={className} to={linkTo} onClick={onClick}>
        <span>
            {image && (
                <img src={image} alt={title} />
            )}

            {icon && (<FontAwesomeIcon icon={icon} />)}

            <span>
                {title}
            </span>

            {! linkTo && (<FontAwesomeIcon icon={'caret-down'} />)}
        </span>
    </Link>
);

export const MenuToggleButton = styled(MenuToggleButtonContainer)`
    height: 40px;
    background: ${props => props.isOpen ? '#111111' : 'transparent'};
    color: ${props => props.isOpen ? 'white' : '#999999'};

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

    ${props => props.isSidebar ? `
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
    ` : ''}
`
