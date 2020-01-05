import React, { useState, Fragment } from 'react';

import './reset.css';
import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainContainer } from '../Container';
import HeaderBar, { HeaderSidebar } from '../HeaderBar';
import MediaQueryWidget, { useMediaQuery } from '../MediaQueryWidget';

import Homepage from '../Pages/Home';

import mainMenu from './mainMenu';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const MainContent = ({ mainMenu, isSidebarMode, isDockedEnabled, onSidebarButtonClick }) => (
	<Fragment>
		<HeaderBar
			brandLink={'/'}
			displayName={'PizzaChic'}
			userImage={'http://staging.paygatepos.com/images/users/11.png'}
			menuItems={[
				{ linkTo: '/profile', title: 'Perfil', icon: 'user' },
				{ linkTo: '/settings', title: 'Configurações', icon: 'cog' },
				{ linkTo: '/logout', title: 'Sair', icon: 'power-off' },
			]}
			mainMenu={mainMenu}
			isSidebarMode={isSidebarMode}
			isDockedEnabled={isDockedEnabled}
			onSidebarButtonClick={onSidebarButtonClick}
		/>

		<Switch>
			<Route path="/" exact>
				<Homepage />
			</Route>
		</Switch>
	</Fragment>
);

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	const isDockedEnabled = useMediaQuery('screen and (min-width: 700px)');

	return (
		<Router>
			<MainContainer>
				{!window.electronBridge ? (
					<Fragment>
						<MediaQueryWidget mediaQuery={'screen and (max-width: 800px)'}>
							<HeaderSidebar
								isDocked={isDockedEnabled}
								isOpen={menuOpen}
								setOpen={isOpen => setMenuOpen(isOpen)}
								mainMenu={mainMenu}
							>
								<MainContent
									isSidebarMode={true}
									isDockedEnabled={isDockedEnabled}
									onSidebarButtonClick={() => setMenuOpen(!menuOpen)}
								/>
							</HeaderSidebar>
						</MediaQueryWidget>

						<MediaQueryWidget mediaQuery={'screen and (min-width: 801px)'}>
							<MainContent mainMenu={mainMenu} />
						</MediaQueryWidget>
					</Fragment>
				) : (
					<MainContent mainMenu={mainMenu} />
				)}
			</MainContainer>
		</Router>
	);
}

export default App;
