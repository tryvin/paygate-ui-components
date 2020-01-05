import React from 'react';

import { ContainerFluid } from '../../Container';
import { GridContainer, Row, Col } from '../../Grid';

import SubHeaderBar, { SubHeaderBarContent } from '../../SubHeaderBar';

import ButtonBox from './ButtonBox';
import SummaryBox from './SummaryBox';
import SystemWarnings from './SystemWarnings';
import UserFeed from './UserFeed';

export default props => (
	<ContainerFluid>
		<SubHeaderBar>
			<SubHeaderBarContent
				title={'Inicio'}
				subtitle={'Visão geral da organização'}
				icon={'tachometer-alt'}
			/>
		</SubHeaderBar>

		<ContainerFluid padded>
			<GridContainer fluid>
				<Row>
					<Col xs={4} sm={8} md={2} lg={2}>
						<ButtonBox />
					</Col>
					<Col xs={4} sm={8} md={6} lg={10}>
						<SummaryBox />
					</Col>
				</Row>
				<Row>
					<Col xs={8} sm={16} md={4} lg={6}>
						<SystemWarnings />
					</Col>
					<Col xs={8} sm={16} md={4} lg={6}>
						<UserFeed />
					</Col>
				</Row>
			</GridContainer>
		</ContainerFluid>
	</ContainerFluid>
);
