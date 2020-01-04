import React, { Fragment } from 'react';

import { Row, Col } from '../../Grid';

import Button, { ButtonLink } from '../../Button';

export default props => (
	<Fragment>
		<Row>
			<Col xs={4} sm={4}>
				<ButtonLink
					title={'Novo Cliente'}
					icon={'users'}
					padded
					to={'/customers/new'}
					triangleIcon={'plus'}
					triangleColor={'red'}
				/>
			</Col>
			<Col xs={4} sm={4}>
				<ButtonLink title={'Vendas'} icon={'barcode'} padded to={'/vending'} />
			</Col>
		</Row>
		<Row>
			<Col xs={4} sm={4}>
				<Button title={'Usuários'} icon={'user'} padded />
			</Col>
			<Col xs={4} sm={4}>
				<Button title={'Calendário'} icon={'calendar-alt'} padded />
			</Col>
		</Row>
		<Row>
			<Col xs={4} sm={4}>
				<Button title={'Configurações'} icon={'cogs'} padded />
			</Col>
			<Col xs={4} sm={4}>
				<Button title={'Ajuda'} icon={'question-circle'} padded />
			</Col>
		</Row>
	</Fragment>
);
