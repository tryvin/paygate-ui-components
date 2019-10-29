import styled from 'styled-components';
import { linearGradient } from '../Styled';

export { default as DropdownMenuItem } from './DropdownMenuItem';
export { default as MenuToggleButton } from './MenuToggleButton';

export const DropdownMenu = styled.ul.attrs(props => ({
    className: `${props.isOpen ? 'isOpen' : ''} ${props.left ? 'left' : ''} ${props.isSidebar ? 'isSidebar' : 'noSidebar'}`
}))`
    &.isSidebar {
        height: 0;
        transition: transform 0.3s ease;
        transform: scaleY(0);
        transform-origin: top;
        overflow: hidden;

        &.isOpen {
            height: auto;
            transform: scaleY(1);
        }
    }

    &.noSidebar {
        position: absolute;
        top: 100%;
        z-index: 10000;
        float: left;
        background: whitesmoke;
        ${linearGradient('#fdfdfd', '#f5f5f5')}
        box-shadow: 0 1px 2px #dadada;

        display: none;

        &:before {
            left: auto;
            right: 12px;
            content: '';
            display: inline-block;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #ccc;
            border-bottom-color: whitesmoke;
            position: absolute;
            top: -7px;
        }

        &.left:before {
            left: 12px;
            right: auto;
        }

        &.isOpen {
            display: block;
        }
    }

    &.isOpen {
        padding: 5px 0;
        margin: 4px 0 0;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 6px;
    }

    min-width: 160px;
    list-style: none;
    background-size: 100%;
`
