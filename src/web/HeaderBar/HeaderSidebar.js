import React, { Fragment } from 'react';
import Sidebar from 'react-sidebar';

import BrandImage, { BrandImageLink } from './BrandImage';
import MainMenu from '../MainMenu';

import logoImage from './images/logo.png';

export default ({isDocked, isOpen, setOpen, mainMenu, brandLink, children}) => {
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
