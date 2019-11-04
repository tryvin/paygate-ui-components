import React, { Component, Fragment } from 'react';

import onClickOutside from "react-onclickoutside";

import { Navbar, NavbarInner, NavColumn } from '../Navbar';
import { DropdownMenu, DropdownMenuItem, MenuToggleButton } from '../DropdownMenu';

import BrandImage, { BrandImageLink } from './BrandImage';
import MainMenu from '../MainMenu';
import SidebarOpenButton from './SidebarOpenButton';

import logoImage from './images/logo.png';

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

export { default as BrandImage, BrandImageLink } from './BrandImage';
export { default as HeaderSidebar } from './HeaderSidebar';
export { default as SidebarOpenButton } from './SidebarOpenButton';
