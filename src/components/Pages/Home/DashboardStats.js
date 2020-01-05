import React from 'react';

import { Row, Col, PaddedView } from '../../Grid';

import StatsView from '../../StatsView';

export default props => (
	<Col>
		<Row>
			<Col>
				<PaddedView>
					<StatsView
						title={'Valor total Bancário'}
						icon={'money-bill-alt'}
						value={'R$ 1.000.000.000,00'}
					/>
				</PaddedView>
			</Col>
		</Row>
		<Row>
			<Col>
				<PaddedView>
					<StatsView
						title={'total emitido'}
						icon={'arrow-circle-up'}
						value={'R$ 9.999.999,00'}
						small
					/>
				</PaddedView>
			</Col>
			<Col>
				<PaddedView>
					<StatsView title={'total de clientes'} icon={'users'} value={'1000'} small />
				</PaddedView>
			</Col>
		</Row>
	</Col>
);
