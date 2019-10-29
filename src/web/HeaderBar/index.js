import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import Sidebar from 'react-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";

import { Navbar, NavbarInner, NavColumn } from '../Navbar';
import { DropdownMenu, DropdownMenuItem, MenuToggleButton } from '../DropdownMenu';

import MainMenu from '../MainMenu';

import logoImage from './images/logo.png';

const BrandImageLink = styled(Link)`
    padding: 3px 20px 3px;
    width: 109px;
    height: 40px;
    display: block;
`

const BrandImage = styled.img`
    max-height: 42px;
    margin-left: ${props => props.sidebar ? '0px' : '-20px'};
    width: 109px;
    height: 40px;
`

export const HeaderSidebar = ({isDocked, isOpen, setOpen, mainMenu, brandLink, children}) => {
    const sidebarStyles = {
        sidebar: {
            backgroundColor: '#11161A',
            width: '200px'
        }
    }

    const sidebarMenu = (
            <Fragment>
                {isDocked ? (
                    <BrandImageLink to={brandLink}>
                        <BrandImage src={logoImage} sidebar/>
                    </BrandImageLink>
                ) : null}

                <MainMenu menu={mainMenu} open={isOpen} isSidebar={true}/>
            </Fragment>
        )

    return (
        <Sidebar styles={sidebarStyles} sidebar={sidebarMenu} docked={isDocked} open={isOpen} onSetOpen={setOpen}>
            {children}
        </Sidebar>
    )
}

const SidebarOpenButtonBase = ({onClick, className}) => (
    <button onClick={onClick} className={className}>
        <FontAwesomeIcon icon={'bars'} />
    </button>
)

const SidebarOpenButton = styled(SidebarOpenButtonBase)`
    background: transparent;
    border: 0px;
    color: white;
    font-size: 18px;
    margin-right: 10px;
`

class HeaderBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };
    }

    handleClickOutside = evt => {
        this.setState({
            isMenuOpen: false
        })
    }

    handleClick = () => {
        this.setState({
            isMenuOpen: ! this.state.isMenuOpen
        })
    }

    render() {
        return (
            <Fragment>
                <Navbar>
                    <NavbarInner>
                        <NavColumn size={68}>
                            {this.props.isSidebarMode && ! this.props.isDockedEnabled ? (
                                <SidebarOpenButton onClick={this.props.onSidebarButtonClick}/>
                            ) : null}

                            {! this.props.isDockedEnabled ? (
                                <BrandImageLink to={this.props.brandLink}>
                                    <BrandImage src={logoImage} />
                                </BrandImageLink>
                            ) : null}

                            {this.props.mainMenu ? (
                                <MainMenu menu={this.props.mainMenu}/>
                            ) : null}
                        </NavColumn>

                        <NavColumn justifyContent={'flex-end'} size={32}>
                            <MenuToggleButton
                                title={! this.props.userImage ? this.props.displayName : null}
                                image={this.props.userImage}
                                onClick={this.handleClick}
                                isOpen={this.state.isMenuOpen}
                            />

                            <DropdownMenu isOpen={this.state.isMenuOpen}>
                                {
                                    this.props.menuItems &&
                                        this.props.menuItems.map((menuItem, index) => (
                                            <DropdownMenuItem key={`header-menu-item-${index}`} linkTo={menuItem.linkTo} title={menuItem.title} icon={menuItem.icon}/>
                                        ))
                                }
                            </DropdownMenu>
                        </NavColumn>
                    </NavbarInner>
                </Navbar>
            </Fragment>
        );
    }
}

export default onClickOutside(HeaderBar);
