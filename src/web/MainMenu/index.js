import React, {Component, Fragment} from 'react';
import onClickOutside from "react-onclickoutside";

import { DropdownMenu, DropdownMenuItem, MenuToggleButton } from '../DropdownMenu';

class MainMenuBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuState: {},
            lockClickOutside: false
        }
    }

    handleClickOutside = () => {
        if ( ! this.props.isSidebar && ! this.state.lockClickOutside ) {
            this.setState({
                menuState: {}
            })
        }
    }

    lastTimeout = false;

    menuAction = (index, isOpen) => {
        //We set the menu state to open the wanted menu, and lock the click outside hook
        //Otherwise as soon as we click at it, we will get the outside hook triggered, and this will close the menu.
        //We then unlock it after 300 milliseconds

        this.setState({
            menuState: {
                [index]: isOpen
            },
            lockClickOutside: true
        }, () => {
            if ( this.lastTimeout !== false ) {
                clearTimeout(this.lastTimeout);
            }

            this.lastTimeout = setTimeout(() => {
                this.setState({
                    lockClickOutside: false
                })
            }, 300)
        })
    }

    handleMouseEnter = (evt, index, whereFrom) => {
        evt.preventDefault();

        if ( whereFrom === 'pointer' && ! this.props.isSidebar ) {
            this.menuAction(index, true)
        }
        else if ( whereFrom === 'click' && this.props.isSidebar ) {
            this.menuAction(index, ! this.state.menuState[index])
        }
    }

    componentDidMount() {
        if ( window.electronBridge ) {
            window.electronBridge.setMenu(
                this.props.menu.map((action, index) => {
                    if ( action.items ) {
                        return {
                            label: action.title,
                            submenu: action.items.map((menuItem, index) => {
                                return {
                                    label: menuItem.title,
                                    click: async () => {
                                        console.log(menuItem.linkTo)
                                    }
                                }
                            })
                        }
                    }

                    return {
                        label: action.title,
                        submenu: [
                            {
                                label: action.title,
                                click: async () => {
                                    console.log(action.linkTo)
                                },
                            }
                        ]
                    }
                })
            )
        }
    }

    componentWillUnmount() {
        if ( window.electronBridge ) {
            window.electronBridge.setMenu([])
        }
    }

    render() {
        return window.electronBridge ? null : (
            <Fragment>
                {
                    this.props.menu.map((action, index) => (
                        <div onPointerEnter={(evt) => this.handleMouseEnter(evt, index, 'pointer')} onClick={(evt) => this.handleMouseEnter(evt, index, 'click')} key={`main-menu-item-${index}`}>
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
