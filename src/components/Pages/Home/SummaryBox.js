import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';

import { Row, Col } from '../../Grid';

import DashboardStats from './DashboardStats';

export default props => (
	<Box>
		<BoxHeader title={'Resumo'} icon={'tachometer-alt'} />
		<BoxContent padded>
			<Row>
				<Col xs={4} sm={8} md={4} lg={5}>
					<DashboardStats />
				</Col>
				<Col xs={4} sm={8} md={4} lg={7}>
					Oi
				</Col>
			</Row>
		</BoxContent>
	</Box>
);
