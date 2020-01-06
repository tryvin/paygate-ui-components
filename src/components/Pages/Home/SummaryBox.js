import React from 'react';

import Box, { BoxHeader, BoxContent } from '../../Box';
import { Row, Col } from '../../Grid';
import Chart from '../../Chart';

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
					<Chart
						data={[
							{
								label: 'Vendas',
								data: [
									['01/01/2020', 27432],
									['02/01/2020', 10569],
									['03/01/2020', 14000],
									['04/01/2020', 2000],
									['05/01/2020', 7000],
								],
							},
						]}
						axes={[
							{ primary: true, type: 'ordinal', position: 'bottom' },
							{ type: 'linear', position: 'left' },
						]}
						title={'Valor de vendas por dia'}
						tooltip
					/>
				</Col>
			</Row>
		</BoxContent>
	</Box>
);
