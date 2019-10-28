import React, {Component, Fragment} from 'react';
import onClickOutside from "react-onclickoutside";

import { DropdownMenu, DropdownMenuItem, MenuToggleButton } from '../DropdownMenu';

class MainMenuBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuState: {}
        }
    }

    handleClickOutside = () => {
        if ( ! this.props.isSidebar ) {
            this.setState({
                menuState: {}
            })
        }
    }

    menuAction = (index, isOpen) => {
        this.setState({
            menuState: {
                [index]: isOpen
            }
        })
    }

    handleMouseEnter = (evt, index) => {
        evt.preventDefault();
        this.menuAction(index, true)
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.menu.map((action, index) => (
                        <div onPointerEnter={(evt) => this.handleMouseEnter(evt, index)} key={`main-menu-item-${index}`}>
                            <MenuToggleButton
                                title={action.title}
                                icon={action.icon}
                                linkTo={action.linkTo}
                                isOpen={action.items ? this.state.menuState[index] : false}
                                isSidebar={this.props.isSidebar}
                            />

                            {action.items ? (
                                <DropdownMenu isOpen={this.state.menuState[index]} left isSidebar={this.props.isSidebar}>
                                    {
                                        action.items.map((menuItem, index) => (
                                                <DropdownMenuItem
                                                    key={`menuitem-${index}`}
                                                    linkTo={menuItem.linkTo}
                                                    title={menuItem.title}
                                                    icon={menuItem.icon}
                                                    isSidebar={this.props.isSidebar}
                                                />
                                        ))
                                    }
                                </DropdownMenu>
                            ) : null}
                        </div>
                    ))
                }
            </Fragment>
        )
    }
}

export default onClickOutside(MainMenuBase)
